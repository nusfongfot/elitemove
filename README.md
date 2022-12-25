# About this Project

# Team members

- Kanthamas [origin/1000]
- Nattawong
- Pavit
- Sorawit [origin/4000]
- Sitichai [origin/5000]

## Install react bootstrap
1.สร้างโปรเจค
npx create-react-app ชื่อโปรเจค

2.ติดตั้ง bootstrap =>
npm install react-bootstrap bootstrap

3.เอาคำด้านล่างไว้ที่ src/index.js or App.js file =>
import 'bootstrap/dist/css/bootstrap.min.css';

##  css color variables
```css
:root {
--purple: hsla(266, 99%, 56%, 1);
--yellow: hsla(36, 96%, 71%, 1);
--black: hsla(0, 0%, 8%, 1);
--grey: hsla(240, 5%, 16%, 1);
--white: hsla(0, 0%, 100%, 1);
}
```
## NOTE: css NO border radius 
- button
- input

## ESLINT error
```js
/* eslint-disable linebreak-style */
```
## วิธีใช้ปุ่ม 
1. ให้เข้าไปที่ src/buttons
2. มีให้เลือก 3 ปุ่ม คือปุ่มม่วง (ButtonPurple.jsx) ปุ่มเหลือง (ButtonYellow.jsx) ปุ่มม่วงแบบโปร่ง (ButtonPurpleOutline.jsx)
3. import ไปใช้ได้เลย  
4. กำหนดชื่อให้ปุ่ม และกำหนดฟังก์ชั่น onClick 
    ```js
      import ButtonPurple from "../buttons/ButtonPurple";

      const handleOnClick = () => {
            widgetRef.current.open();

      };

      <ButtonPurple text={`Edit Photo`} onClick={handleOnClick} />

    ```
    ![image](https://user-images.githubusercontent.com/114124443/206630530-61a39b9d-857c-4ee2-8095-655a6759f17f.png)
    ![image](https://user-images.githubusercontent.com/114124443/206630635-ae7e5c9b-6f2d-4aa1-a05c-8104adce05a3.png)

## UploadPhoto == Cloudinary Widget


## ActivitySchema
```JS
const mongoose = require('mongoose')

const ActivitySchema = new mongoose.Schema({  
  type: {
    type: String,
    enum: ['bicycling', 'running', 'hiking', 'walking', 'swiming'],
    required: true
  },
  durationMin: {
    type: Number,
    required: true
  },
  dateTime: {
    type: Date,
    required: true
  },
  distanceKM: {
    type: Number
  },
  title: {
    type: String
  },
  details: {
    type: String
  },
  photo: {
    type: String
  }
})

const ActivityModel = mongoose.model('Activity', ActivitySchema)

module.exports = ActivityModel
```
