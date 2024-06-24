
$(document).ready(function() {
    var data = [
        {
          id : 1 ,
          city : 'دمشق',
          title : "شقة غرفة وصالة مساحة 100 م" ,
          price : "2000000" ,
          img : "" ,
          detail : {
            aria : ["صحنايا" , "يوجد ناطور", 'طابق اول' ],
            state : ["حكم حكمة ", " غير مفروش" , "بلكون مساحة 17 متر"] ,
            img : ['https://imagedelivery.net/1DNKFJPRaeUdy_j8F7HT3w/production/compound/100216/images/Screenshot%202024-05-12%20111253.png-509898bd-ec66-4e9d-9e47-49f529a03b0e.png/w=720,q=75',
                    'https://imagedelivery.net/1DNKFJPRaeUdy_j8F7HT3w/production/compound/100216/images/Screenshot%202024-05-12%20111202.png-94596d51-c300-419d-95bb-6603572ce5e8.png/w=720,q=75',
                    'https://imagedelivery.net/1DNKFJPRaeUdy_j8F7HT3w/production/compound/100216/images/Screenshot%202024-05-12%20111034.png-b5dac413-aa19-49c5-aa83-a92f758f9680.png/w=720,q=75'
            ] ,
          }
        },
        {
          id : 2 ,
          city : 'حمص',
          title : " دكان مساحة 50م" ,
          price : "250000" ,
          detail : {
            aria : ["الخالدية " , " متوفر كهرباء وماء " , " مقابيل مدرسة "],
            state : ["طابو اخضر " , "مجهز " , " مدوكر"] ,
            img : ['https://imagedelivery.net/1DNKFJPRaeUdy_j8F7HT3w/production/compound/100216/images/Screenshot%202024-05-12%20111253.png-509898bd-ec66-4e9d-9e47-49f529a03b0e.png/w=720,q=75',
                    'https://imagedelivery.net/1DNKFJPRaeUdy_j8F7HT3w/production/compound/100216/images/Screenshot%202024-05-12%20111202.png-94596d51-c300-419d-95bb-6603572ce5e8.png/w=720,q=75',
                    'https://imagedelivery.net/1DNKFJPRaeUdy_j8F7HT3w/production/compound/100216/images/Screenshot%202024-05-12%20111034.png-b5dac413-aa19-49c5-aa83-a92f758f9680.png/w=720,q=75'
            ] ,
          }
        },
        {
          id : 3 ,
          city : 'حلب',
          title : "شقة غرفة وصالة مساحة 70 م" ,
          price : "500000" ,
          detail : {
            aria : [ "سيف الدولة " , " متوفر كهرباء " , " يوجد مصعد "],
            state : ["حكم محكمة "  , "بلكون 20 متر "  , "مفروش "] ,
            img : ['https://imagedelivery.net/1DNKFJPRaeUdy_j8F7HT3w/production/compound/100216/images/Screenshot%202024-05-12%20111253.png-509898bd-ec66-4e9d-9e47-49f529a03b0e.png/w=720,q=75',
                    'https://imagedelivery.net/1DNKFJPRaeUdy_j8F7HT3w/production/compound/100216/images/Screenshot%202024-05-12%20111202.png-94596d51-c300-419d-95bb-6603572ce5e8.png/w=720,q=75',
                    'https://imagedelivery.net/1DNKFJPRaeUdy_j8F7HT3w/production/compound/100216/images/Screenshot%202024-05-12%20111034.png-b5dac413-aa19-49c5-aa83-a92f758f9680.png/w=720,q=75'
            ] ,
          }
        },
        {
          id : 4 ,
          city : 'دمشق',
          title : "شقة فارغة غرفتين وصالة 110م" ,
          price : "600000" ,
          detail : {
            aria : [' ركن الدين' , 'متوفر كراج' , 'الطابق الثالث'],
            state : ['طابو' , 'بلكون مساحة 12 متر' , 'مفروشة'] ,
            img : ['https://imagedelivery.net/1DNKFJPRaeUdy_j8F7HT3w/production/compound/100216/images/Screenshot%202024-05-12%20111253.png-509898bd-ec66-4e9d-9e47-49f529a03b0e.png/w=720,q=75',
                    'https://imagedelivery.net/1DNKFJPRaeUdy_j8F7HT3w/production/compound/100216/images/Screenshot%202024-05-12%20111202.png-94596d51-c300-419d-95bb-6603572ce5e8.png/w=720,q=75',
                    'https://imagedelivery.net/1DNKFJPRaeUdy_j8F7HT3w/production/compound/100216/images/Screenshot%202024-05-12%20111034.png-b5dac413-aa19-49c5-aa83-a92f758f9680.png/w=720,q=75'
            ] ,
          }
        }
    ];

    function generateCaptcha() {
      let captchaContainer = $('#captchaContainer');
      let randomNum = Math.floor(10000 + Math.random() * 90000);
      captchaContainer.text(randomNum);
      return randomNum;
  }

  let generatedCaptcha = generateCaptcha();
  
    var tableBody = $("#myTable tbody");
    data.forEach(function(item) {
      var row = `
    <tr>
      <td><input type="checkbox" class="select-checkbox" data-id="${item.id}"></td>
      <td>${item.city}</td>
      <td>${item.title}</td>
      <td>${item.price} ل س </td>
      <td><button class="details-button">اظهار التفاصيل</button></td>
    </tr>
    <tr class="details-row">
      <td colspan="5">
        <div class="flex-col">
          <div class="flex-bet">
            <h3>${item.detail.aria[0]}</h3>
            <h3>${item.detail.aria[1]}</h3>
            <h3>${item.detail.aria[2]}</h3>
          </div>
          <div class="flex-bet">
            <h3>${item.detail.state[0]}</h3>
            <h3>${item.detail.state[1]}</h3>
            <h3>${item.detail.state[2]}</h3>
          </div>
          <div class="flex-bet">
            <img alt="img home" width="200px" src="${item.detail.img[0]}" />
            <img alt="img home" width="200px" src="${item.detail.img[1]}" />
            <img alt="img home" width="200px" src="${item.detail.img[2]}" />
          </div>
        </div>
      </td>
    </tr>`;

        tableBody.append(row);
    });


    $(document).on("click", ".details-button", function() {
        $(this).closest("tr").next(".details-row").toggle();
        var buttonText = $(this).text() === "اظهار التفاصيل" ? "اخفاء التفاصيل " : "اظهار التفاصيل";
        $(this).text(buttonText);
    });

           
  $("#getSelectedData").click(function() {
      var selectedData = [];
      $(".select-checkbox:checked").each(function() {
          var id = $(this).data("id");
          var item = data.find(d => d.id === id);
          if (item) {
              selectedData.push(item);
          }
      });
      localStorage.setItem("selectedData", JSON.stringify(selectedData));
      $(".form-container").addClass('show');
});

$("#submit").click(function(e) {
  e.preventDefault(); 

  let userInput = $('#captchaInput').val();
  if (userInput != generatedCaptcha) {
      alert('الرقم المدخل غير صحيح. يرجى المحاولة مرة أخرى.');
      generatedCaptcha = generateCaptcha(); 
  } else {
      window.location.href = "./productDetails.html";
  }
});
});
