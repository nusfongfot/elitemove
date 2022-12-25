/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import LineChart from '../LineChart/LineChart';
import ActivityAllSummary from '../ActivityAllSummary/ActivityAllSummary';
import * as statisticsAPI from '../../api/statisticsApi';

function Statistics() {
  const [type, setType] = useState('');
  const [active, setActive] = useState('week');
  const [linear, setLinear] = useState([]);
  const [queryString, setQueryString] = useState('');
  const [typeChartData, setTypeChartData] = useState([]);
  const [totalStat, setTotalStat] = useState({
    totalCount: 0,
    totalCaloriesBurnedCal: 0,
    totalDurationMin: 0,
    totalDistanceKM: 0,
  });

  const handleClick = (event) => {
    setActive(event.target.id);
  };
  useEffect(() => {
    const fetchStat = async () => {
      try {
        const res = await statisticsAPI.getStatistics(queryString);
        const arrayLinear = res.data.summary.linear;
        const typeChart = res.data.summary.type.sort((a, b) => b.count - a.count);
        setLinear(arrayLinear);
        setTypeChartData(typeChart);
        setTotalStat({
          totalCount: res.data.summary.totalCount,
          totalCaloriesBurnedCal: res.data.summary.totalCaloriesBurnedCal,
          totalDurationMin: res.data.summary.totalDurationMin,
          totalDistanceKM: res.data.summary.totalDistanceKM,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStat();
  }, [queryString]);

  useEffect(() => {
    let q = '';

    if (type) {
      q += `activityType=${type}`;
    }

    if (active) {
      q += `&duration=${active}`;
    }
    if (type === 'all') {
      q = `duration=${active}`;
    }

    setQueryString(q);
  }, [active, type]);

  return (
    <>
      <div className="d-flex gap-3 align-items-center">
        <div className="d-flex flex-column align-items-center">
          <h6>Distance</h6>
          <h6>
            {totalStat.totalDistanceKM.toLocaleString()}
            {' '}
            km
          </h6>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h6>Time</h6>
          <h6>
            {(totalStat.totalDurationMin / 60).toFixed(2).toLocaleString()}
            {' '}
            Hr
          </h6>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h6>Calories</h6>
          <h6>
            {totalStat.totalCaloriesBurnedCal.toLocaleString()}
            {' '}
            cal
          </h6>
        </div>
        <div className="d-flex flex-column align-items-center mb-2">
          <select
            className="bg-button"
            onChange={(e) => setType(e.target.value)}
            defaultValue="Select Type"
          >
            <option value="select" hidden>
              Select Type
            </option>
            <option value="all">all</option>
            <option value="bicycling">bicycling</option>
            <option value="hiking">hiking</option>
            <option value="running">running</option>
            <option value="walking">walking</option>
            <option value="swimming">swimming</option>
          </select>
          <div className="d-flex w-100">
            <button
              type="button"
              className={active === 'week' ? 'active' : 'w-100 bg-button'}
              onClick={handleClick}
              id="week"
            >
              W
            </button>
            <button
              type="button"
              className={active === 'month' ? 'active' : 'w-100 bg-button'}
              onClick={handleClick}
              id="month"
            >
              M
            </button>
            <button
              type="button"
              className={active === 'year' ? 'active' : 'w-100 bg-button'}
              onClick={handleClick}
              id="year"
            >
              Y
            </button>
          </div>
        </div>
      </div>
      <div>
        <LineChart active={active} linear={linear} />
        <ActivityAllSummary data={typeChartData} />
      </div>
    </>
  );
}

export default Statistics;
