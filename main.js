'use strict';
const koreaToTalCaseText = document.querySelector('.total__case');
const koreaNewCaseText = document.querySelector('.new__case');


axios({
  method: 'get',
  url: 'https://api.corona-19.kr/korea/country/new/?serviceKey=',
  responseType: 'stream'
})
  .then(function (response) {
    // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    console.log(response)
    const seoulTotalCase = response.data.seoul.totalCase;
    const seoulNewCase = response.data.seoul.newCase;
    const seoulRecoverd = response.data.seoul.recovered;
    const seouldeath = response.data.seoul.death;
    const seoulpercent = response.data.seoul.percentage;
    const seoulForeginerCase = response.data.seoul.newFcase;
    const seoulAreaCase = response.data.seoul.newCcase;
    const busanTotalCase = response.data.busan.totalCase;
    const chungbokTotalCase = response.data.chungbuk.totalCase;
    const chungnamTotalCase = response.data.chungnam.totalCase;
    const daeguTotalCase = response.data.daegu.totalCase;
    const daejeonTotalCase = response.data.daejeon.totalCase;
    const gangwonTotalCase = response.data.gangwon.totalCase;
    const gwangjuTotalCase = response.data.gwangju.totalCase;
    const gyeongbukTotalCase = response.data.gyeongbuk.totalCase;
    const gyeonggiTotalCase = response.data.gyeonggi.totalCase;
    const gyeongnamTotalCase = response.data.gyeongnam.totalCase;
    const incheonTotalCase = response.data.incheon.totalCase;
    const jejuTotalCase = response.data.jeju.totalCase;
    const sejongTotalCase = response.data.sejong.totalCase;
    const ulsanTotalCase = response.data.ulsan.totalCase;
    const koreaTotalCase = response.data.korea.totalCase;
    const koreanewCase = response.data.korea.newCase;


    koreaToTalCaseText.innerText = koreaTotalCase;
    koreaNewCaseText.innerText = koreanewCase;



    class Seoul {
      constructor(newcase, totalcase, rocovered, dead, percetage, foreginercase, areacase) {
        this.newcase = newcase;
        this.totalCase = totalcase;
        this.rocovered = rocovered;
        this.dead = dead;
        this.percetage = percetage;
        this.foreginercase = foreginercase;
        this.areacase = areacase;

      }
    }

    let seoul = new Seoul(seoulNewCase, seoulTotalCase,
      seoulRecoverd, seouldeath, seoulpercent, seoulForeginerCase, seoulAreaCase);


    console.log(seoul.newcase);
    console.log(seoul.totalCase);
    console.log(seoul.rocovered);
    console.log(seoul.dead);
    console.log(seoul.percetage);
    console.log(seoul.foreginercase);
    console.log(seoul.areacase)

    // const ctx = document.getElementById('myChart').getContext('2d');
    // const myChart = new Chart(ctx, {
    //   type: 'bar',
    //   data: {
    //     labels: ['서울', '경기', '인천', '강원', '대전', '세종',
    //       '광주', '대구', '울산', '부산', '제주', '충북', '충남', '전북', '전남', '경북', '경남'],
    //     datasets: [{
    //       label: '지역 별 코로나 확진자',
    //       data: [seoulTotalCase, gyeonggiTotalCase, incheonTotalCase, gangwonTotalCase, daejeonTotalCase,
    //         sejongTotalCase, gwangjuTotalCase, daeguTotalCase, ulsanTotalCase, busanTotalCase, , jejuTotalCase, chungbokTotalCase, chungnamTotalCase, gyeongbukTotalCase, gyeongnamTotalCase],
    //       backgroundColor: [
    //         // 서울
    //         'rgba(255, 99, 132, 0.2)',
    //         // 경기
    //         'rgba(54, 162, 235, 0.2)',
    //         // 인천
    //         'rgba(255, 206, 86, 0.2)',
    //         // 강원
    //         'rgba(75, 192, 192, 0.2)',
    //         // 대전
    //         'rgba(153, 102, 255, 0.2)',
    //         // 세종
    //         'rgba(255, 159, 64, 0.2)',
    //         // 광주
    //         'rgba(125, 156, 159, 0.2)',
    //         // 대구
    //         'rgba(189, 216, 218, 0.2)',
    //         // 울산
    //         'rgba( 33, 190, 222, 0.2)',
    //         // 부산
    //         'rgba( 204, 0, 0, 0.2)',
    //         // 제주
    //         'rgba(  153, 255, 0, 0.2)',
    //         // 충북
    //         'rgba( 255, 204, 0, 0.2)',
    //         // 충남
    //         'rgba( 242, 88, 62, 0.2)',
    //         // 전북
    //         'rgba( 70, 32, 102, 0.2)',
    //         // 전남
    //         'rgba(  255, 184, 95, 0.2)',
    //         // 경북
    //         'rgba(  255, 122, 90, 0.2)',
    //         // 경남
    //         'rgba(  73, 69, 70, 0.2)',
    //       ],
    //       borderColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)',
    //         'rgba(125, 156, 159, 1)',
    //         'rgba(189, 216, 218, 1)',
    //         'rgba( 33, 190, 222, 1)',
    //         'rgba( 204, 0, 0, 1)',
    //         'rgba(  153, 255, 0, 1)',
    //         'rgba( 255, 204, 0, 1)',
    //         'rgba( 242, 88, 62, 1)',
    //         // 전북
    //         'rgba( 70, 32, 102, 1)',
    //         // 전남
    //         'rgba(  255, 184, 95, 1)',
    //         // 경북
    //         'rgba(  255, 122, 90, 1)',
    //         // 경남
    //         'rgba(  73, 69, 70, 1)',
    //       ],
    //       borderWidth: 1
    //     }]
    //   },

    //   options: {
    //     responsive: 'false',
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     },
    //   }
    // });
  });

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['서울', '경기', '인천', '강원', '대전', '세종',
      '광주', '대구', '울산', '부산', '제주', '충북', '충남', '전북', '전남', '경북', '경남'],
    datasets: [{
      label: '지역 별 코로나 확진자',
      data: [2000, 1050, 980, 70, 1000,
        300, 400, 500, 760, 560, 340, 2330, 530, 130, 2330, 502, 707],
      backgroundColor: [
        // 서울
        'rgba(255, 99, 132, 0.2)',
        // 경기
        'rgba(54, 162, 235, 0.2)',
        // 인천
        'rgba(255, 206, 86, 0.2)',
        // 강원
        'rgba(75, 192, 192, 0.2)',
        // 대전
        'rgba(153, 102, 255, 0.2)',
        // 세종
        'rgba(255, 159, 64, 0.2)',
        // 광주
        'rgba(125, 156, 159, 0.2)',
        // 대구
        'rgba(189, 216, 218, 0.2)',
        // 울산
        'rgba( 33, 190, 222, 0.2)',
        // 부산
        'rgba( 204, 0, 0, 0.2)',
        // 제주
        'rgba(  153, 255, 0, 0.2)',
        // 충북
        'rgba( 255, 204, 0, 0.2)',
        // 충남
        'rgba( 242, 88, 62, 0.2)',
        // 전북
        'rgba( 70, 32, 102, 0.2)',
        // 전남
        'rgba(  255, 184, 95, 0.2)',
        // 경북
        'rgba(  255, 122, 90, 0.2)',
        // 경남
        'rgba(  73, 69, 70, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(125, 156, 159, 1)',
        'rgba(189, 216, 218, 1)',
        'rgba( 33, 190, 222, 1)',
        'rgba( 204, 0, 0, 1)',
        'rgba(  153, 255, 0, 1)',
        'rgba( 255, 204, 0, 1)',
        'rgba( 242, 88, 62, 1)',
        // 전북
        'rgba( 70, 32, 102, 1)',
        // 전남
        'rgba(  255, 184, 95, 1)',
        // 경북
        'rgba(  255, 122, 90, 1)',
        // 경남
        'rgba(  73, 69, 70, 1)',
      ],
      borderWidth: 1
    }]
  },

  options: {
    responsive: 'false',
    scales: {
      y: {
        beginAtZero: true
      }
    },
    onClick: function clickHandler(e) {
      const activcpoints = myChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true)
      const firstpoints = activcpoints[0];
      const label = myChart.data.labels[firstpoints.index];
      console.log(label);

    }
  },
});




// const chartEle = document.getElementById('myChart');
// chartEle.addEventListener("click", (e) => {
//   console.log(e.target);
// });
