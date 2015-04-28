            var date2 = document.querySelectorAll('#search-results .article .meta');
            var rightNow = new Date();
            var twoWeeksPast = rightNow.setDate(rightNow.getDate()-14);
            var today = Date.parse(rightNow);
            //console.log(today);
            //console.log(twoWeeksPast);
            //below we get the original values in the .meta class filed
            for (var i = 0; i < date2.length; i++){ 
            console.log(date2[i].innerHTML);}
            
            var dateObject = Date.parse(date2[1].innerHTML);
            //The above finds all the inner date html
           
           //below the values in the .meta class is converted to usable date values
            var allDatesArray = [];
            for (var t = 0; t < date2.length; t++){
              var allDates = date2[t].innerHTML;
              var mapObj = {
                "PM":" PM",
                "AM":" AM"
              };
              allDates = allDates.replace(/PM|AM/gi, function(matched){
                return mapObj[matched]
              });
              allDatesArray.push(Date.parse(allDates));
            }

            // var list = document.querySelectorAll('li');
            // for (var l = 0; l < list.length; l++){
            //   list[l].style.background="url(http://helpdeskassets.s3.amazonaws.com/img/add.png) left 25px no-repeat";
            // } //The above pulls in all li items nad changes the image associated.

            //below the twoWeeksPast is compared to the date in the date array and if the value in the array is greater then, the new image for that list item is shown and font colored red.
            for (var c = 0; c < allDatesArray.length; c++){
              if (twoWeeksPast < allDatesArray[c])
              { 
                var list = document.querySelectorAll('li')[c];
                console.log(list);
                list.style.background = "url(http://helpdeskassets.s3.amazonaws.com/img/add.png) left 25px no-repeat";
                list.style.color = "Red";
                //list[c].style.color = "Red";
                }
              }