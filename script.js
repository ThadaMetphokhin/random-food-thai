console.log('Hello!');
const beef = [
  'แกงเผ็ดเนื้อใส่มะเขือ',
  'แกงพะแนงเนื้อ',
  'สเต๊กเนื้อ',
  'ผัดกะเพราเนื้อใส่หัวปลี',
  'กะเพราเนื้อสับ',
  'เนื้อทอด',
  'ผัดเผ็ดเนื้อ',
  'แกงมัสมั่นเนื้อ',
  'เนื้อทอดซอสซีอิ๊ว',
  'ผัดเนื้อพริกไทยดำ',
];
const pig = [
  'ผัดกะเพราหมูกรอบ',
  'ผัดพริกแกงหมูกรอบ',
  'คะน้าหมูกรอบ',
  'ผัดซีอิ๊วหมู',
  'ข้าวผัดหมู',
  'ข้าวหมูกระเทียม',
  'ข้าวราดผัดกะหล่ำปลีหมูกรอบ',
  'สุกี้น้ำหมู',
  'ข้าวแกงจืดเต้าหู้หมูสับ',
  'เขียวหวานหมู',
];

const chicken = [
  'ไก่ผัดซอส',
  'ข้าวมันไก่',
  'กะเพราไก่',
  'ไก่ผัดมะม่วง',
  'ไก่ย่าง',
  'ไก่ต้มน้ำปลา',
  'ไก่ทอดกระเทียม',
  'ไก่ทอดเกลือ',
  'ผัดพริกแกงไก่',
  'ต้มยำไก่บ้านน้ำข้น',
];
const seafood = [
  'ข้าวผัดกุ้ง',
  'กุ้งผัดผงกะหรี่',
  'กุ้งคั่วพริกเกลือ',
  'ข้าวผัดปู',
  'กุ้งอบวุ้นเส้น',
  'หมึกทอดน้ำปลา',
  'ปลาหมึกผัดไข่เค็ม',
  'กุ้งแช่น้ำปลา',
  'ต้มยำกุ้งน้ำข้น',
  'ยำทะเลรวม',
];

const random1 = () => {
  const meat = document.getElementById('meat').value;
  var r = Math.floor(Math.random() * 10);
  for (let i = 0; i <= r; i++) {
    switch (meat) {
      case 'เนื้อ':
        if ((i = r)) {
          document.getElementById('show').innerHTML = '<p>' + beef[i] + '</p>';
          break;
        } else {
          document.getElementById('show').innerHTML =
            '<p>' + chicken[i] + '</p>';
          break;
        }
      case 'หมู':
        if ((i = r)) {
          document.getElementById('show').innerHTML = '<p>' + pig[i] + '</p>';
          break;
        } else {
          document.getElementById('show').innerHTML = '<p>' + pig[i] + '</p>';
          break;
        }
      case 'ไก่':
        if ((i = r)) {
          document.getElementById('show').innerHTML =
            '<p>' + chicken[i] + '</p>';
          break;
        } else {
          document.getElementById('show').innerHTML =
            '<p>' + chicken[i] + '</p>';
          break;
        }
      case 'ทะเล':
        if ((i = r)) {
          document.getElementById('show').innerHTML =
            '<p>' + seafood[i] + '</p>';
          break;
        } else {
          document.getElementById('show').innerHTML =
            '<p>' + chicken[i] + '</p>';
          break;
        }
      default:
        document.getElementById('show').innerHTML =
          '<p>เลือกเนื้อที่ต้องการด้วยครับ</p>';
    }
  }
};
