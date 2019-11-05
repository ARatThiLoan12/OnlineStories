function displayFavo() {
    display();
    document.getElementById("stories").style.display = "none";
    document.getElementById("myfo").style.display = "block";
    document.getElementById("content").style.display = "none";
}

function displayStories() {
    document.getElementById("stories").style.display = "flex";
    document.getElementById("myfo").style.display = "none";
    document.getElementById("content").style.display = "none";
    document.getElementById("stories").innerHTML = "";
    displayq(storiesArray);
}
//Truyen
var container = document.getElementById("stories");
var container2 = document.getElementById("myfo");
container2.className="arr";
//mang truyen
var s1 = {
    name: "Ngủ cùng sói",
    img: "../IMG/ngu-cung-soi.jpg",
    author: "Diệp Lạc Vô Tâm",
    sum: 'Truyện Ngủ Cùng Sói của tác giả  Diệp Lạc Vô Tâm đem lại cho ta nhiều cảm xúc khác nhau, nhẹ nhàng nhưng sâu lắng. Để trả thù cho đại ca, Hàn Trạc Thần đã giết cả nhà của tên lái xe, cũng chính là kẻ phản bội, nhưng lại tha chết cho đứa con gái mới 7 tuổi của hắn.Hai năm sau, Hàn Trạc Thần đến viện phúc lợi và nhận nuôi hai đứa con, nhưng chỉ giữ lại đứa con gái và dặt tên là Hàn Thiên Vu. Hàn Thiên Vu đã sưởi ấm trái tim băng giá ấy bằng tình cảm gia đình mà trước kia, hắn chưa bao giờ cảm nhận được một cách trọn vẹn. Một bên tình một bên thù liệu bên nào sẽ lấn áp hơn đây?',
    chap1: 'Người ta thường nói: “Phụ nữ như cây dương cầm, nếu được nghệ sĩ tài ba diễn tấu sẽ tạo nên một bản nhạc hay'
    +' nếu vào tay nghệ sĩ tầm thường, chí ít cũng còn là một bản nhạc, nhưng nếu gặp phải người không biết chơi đàn, e rằng không còn là nhạc nữa...”'
    +'Còn tôi, tôi không biết người chơi đàn như thế nào...'
    +'Có người nói với tôi: “Em không cần phải chơi đàn, chỉ cần ngồi cạnh cây đàn cũng đã giống như những bản nhạc của Mozart làm say đắm lòng người rồi...”'
    +'Mozart ư!',
    chap2: 'Trước đây, cũng như bao đứa trẻ khác, tôi có một mái ấm hạnh phúc. Cho dù gia cảnh khó khăn, thường phải di chuyển chỗ ở, nhưng tôi có bố mẹ yêu thương, anh trai bảo vệ.'
    +'Tất cả thay đổi vào cái ngày Hàn Trạc Thần xuất hiện.'
    +'“Con yêu, mau xuống đi, kẻo ngã đấy!” Bố luôn yêu tôi nhất. Ông thường đỡ tôi từ cửa sổ đặt xuống đất bằng cánh tay chắc nịch, hôn lên má tôi, những sợi râu cứng của ông chạm vào mặt khiến tôi hơi đau.'
}
var s2 = {
    name: "Mãi mãi là bao xa",
    img: "../IMG/715.jpg",
    author: "Diệp Lạc Vô Tâm",
    sum: 'Bạch Lăng Lăng, nữ sinh khoa Điện khí, trẻ trung, xinh đẹp và rất tự hào khi quen được một người bạn lý tưởng qua mạng, chàng du học sinh của một trường nổi tiếng của Mỹ, người mang biệt danh “nhà khoa học”: Mãi Mãi Là Bao Xa. Qua những cuộc chuyện trò trên QQ, Lăng Lăng đã gắn bó với chàng trai đó lúc nào cô cũng không hay, cảm xúc lớn dần, sự chia sẻ lớn dần và đến một ngày cô phát hiện ra mình đã yêu người con trai “tài giỏi” và không một chút khuyết điểm ấy. Nhưng sự tỉnh táo giúp cô ý thức được rằng, thế giới mạng chỉ là ảo, họ ở cách nhau cả một đại dương mênh mông, anh lại quá xuất sắc và ưu tú, mối quan hệ của họ sẽ không có kết quả gì. Nhất là khi anh thông báo, nếu anh tiếp tục sự nghiệp nghiên cứu lần này, rất có thể anh phải định cư bên Mỹ, mãi mãi không trở về. Khi nghe tin đó, cô đã gục xuống trước màn hình máy tính và khóc. Tất cả như sụp đổ, tia hy vọng cuối cùng dập tắt, anh sẽ không về nước nữa, khoảng cách giữa họ là mãi mãi… Cô cay đắng nói với anh lời từ biệt và đưa nick của anh vào danh sách đen, không bao giờ xuất hiện khi cô đăng nhập QQ nữa…',
    chap1: 'Người ta thường nói: “Phụ nữ như cây dương cầm, nếu được nghệ sĩ tài ba diễn tấu sẽ tạo nên một bản nhạc hay'
    +' nếu vào tay nghệ sĩ tầm thường, chí ít cũng còn là một bản nhạc, nhưng nếu gặp phải người không biết chơi đàn, e rằng không còn là nhạc nữa...”'
    +'Còn tôi, tôi không biết người chơi đàn như thế nào...'
    +'Có người nói với tôi: “Em không cần phải chơi đàn, chỉ cần ngồi cạnh cây đàn cũng đã giống như những bản nhạc của Mozart làm say đắm lòng người rồi...”'
    +'Mozart ư!',
    chap2: 'Trước đây, cũng như bao đứa trẻ khác, tôi có một mái ấm hạnh phúc. Cho dù gia cảnh khó khăn, thường phải di chuyển chỗ ở, nhưng tôi có bố mẹ yêu thương, anh trai bảo vệ.'
    +'Tất cả thay đổi vào cái ngày Hàn Trạc Thần xuất hiện.'
    +'“Con yêu, mau xuống đi, kẻo ngã đấy!” Bố luôn yêu tôi nhất. Ông thường đỡ tôi từ cửa sổ đặt xuống đất bằng cánh tay chắc nịch, hôn lên má tôi, những sợi râu cứng của ông chạm vào mặt khiến tôi hơi đau.'
}
var s3 = {
    name: "Hai lần gặp gỡ",
    img: "../IMG/hai-lan-gap-go.jpg",
    author: "Đinh Mặc",
    sum: 'Số phận – tựa như một vòng tròn vô hình – đã gói trọn họ lại với nhau như thế.Nàng – vẫn tưởng như trái tim đã bình lặng sau khi mối tình đầu tan vỡ, lại không ngờ số phận nghiệt ngã khiến nàng gặp anh – người nàng không nên yêu.Anh – vẫn đau đáu vì quá khứ ngủ quên của mình, vì nỗi buồn không sao gọi thành lời, trốn chạy tình yêu của nàng, để đến khi đi tới tận cùng ánh sáng mới nhận ra – anh còn nợ nàng một câu: “không phải không yêu”.Cậu – đau khổ khi tình thân dần biến thành tình yêu, khi hờn giận trở thành cuồng nộ, đánh đổi tất cả chỉ để níu lấy một ánh mắt để rồi khi có được lại cay đắng nhận ra: “nàng”... đã không còn là nàng nữa.',
    chap1: 'Người ta thường nói: “Phụ nữ như cây dương cầm, nếu được nghệ sĩ tài ba diễn tấu sẽ tạo nên một bản nhạc hay'
    +' nếu vào tay nghệ sĩ tầm thường, chí ít cũng còn là một bản nhạc, nhưng nếu gặp phải người không biết chơi đàn, e rằng không còn là nhạc nữa...”'
    +'Còn tôi, tôi không biết người chơi đàn như thế nào...'
    +'Có người nói với tôi: “Em không cần phải chơi đàn, chỉ cần ngồi cạnh cây đàn cũng đã giống như những bản nhạc của Mozart làm say đắm lòng người rồi...”'
    +'Mozart ư!',
    chap2: 'Trước đây, cũng như bao đứa trẻ khác, tôi có một mái ấm hạnh phúc. Cho dù gia cảnh khó khăn, thường phải di chuyển chỗ ở, nhưng tôi có bố mẹ yêu thương, anh trai bảo vệ.'
    +'Tất cả thay đổi vào cái ngày Hàn Trạc Thần xuất hiện.'
    +'“Con yêu, mau xuống đi, kẻo ngã đấy!” Bố luôn yêu tôi nhất. Ông thường đỡ tôi từ cửa sổ đặt xuống đất bằng cánh tay chắc nịch, hôn lên má tôi, những sợi râu cứng của ông chạm vào mặt khiến tôi hơi đau.'
}
var s4 = {
    name: "Archimedes thân yêu",
    img: "../IMG/archimedes-than-yeu.jpg",
    author: "Đinh Mặc",
    sum: 'Chân Ái với vẻ không tin nổi, "Anh lại đặt tên cho thú cưng bằng tên của Einstein và Isaac Newton sao?""Mặc dù tôi đánh giá cao việc cô đã nhận ra nguồn gốc tên của các cô nàng nhưng tôi không thích thái độ của cô với chúng." Ngôn Tố kiêu căng hất mặt, giọng đầy bất mãn. "Albert là con cá nhiệt đới rất có trí tuệ, còn Isaac thuộc được ba định luật Newton bằng tiếng Anh, khẩu âm quận Devon nước Anh. Còn nữa, nó rất thích ăn táo."Chân Ái gật đầu: "Anh chọn Marie làm nữ giúp việc không phải vì tên cô ấy giống với Marie Curie chứ?"Ngôn Tố nheo mắt nhìn cô một lúc, mím môi: "Cô thông minh hơn tôi tưởng. OK, cô có thể tá túc ở nhà',
    chap1: 'Người ta thường nói: “Phụ nữ như cây dương cầm, nếu được nghệ sĩ tài ba diễn tấu sẽ tạo nên một bản nhạc hay'
    +' nếu vào tay nghệ sĩ tầm thường, chí ít cũng còn là một bản nhạc, nhưng nếu gặp phải người không biết chơi đàn, e rằng không còn là nhạc nữa...”'
    +'Còn tôi, tôi không biết người chơi đàn như thế nào...'
    +'Có người nói với tôi: “Em không cần phải chơi đàn, chỉ cần ngồi cạnh cây đàn cũng đã giống như những bản nhạc của Mozart làm say đắm lòng người rồi...”'
    +'Mozart ư!',
    chap2: 'Trước đây, cũng như bao đứa trẻ khác, tôi có một mái ấm hạnh phúc. Cho dù gia cảnh khó khăn, thường phải di chuyển chỗ ở, nhưng tôi có bố mẹ yêu thương, anh trai bảo vệ.'
    +'Tất cả thay đổi vào cái ngày Hàn Trạc Thần xuất hiện.'
    +'“Con yêu, mau xuống đi, kẻo ngã đấy!” Bố luôn yêu tôi nhất. Ông thường đỡ tôi từ cửa sổ đặt xuống đất bằng cánh tay chắc nịch, hôn lên má tôi, những sợi râu cứng của ông chạm vào mặt khiến tôi hơi đau.'
}
var storiesArray = [s1, s2, s3, s4];
displayq(storiesArray);

function displayq(storiesArray) {
    var len = storiesArray.length;
    for (let i = 0; i < len; i++) {
        var box = document.createElement("div");
        box.className = "box";
        var n = document.createElement("p");
        n.className = "title";
        n.innerText = storiesArray[i].name;
        var im = document.createElement("img");
        im.src = storiesArray[i].img;
        im.className = "img";
        var a = document.createElement("p");
        a.className = "author";
        a.innerText = storiesArray[i].author;

        var rateline = document.createElement("span");
        //rate1
        //var ratebtn1 = document.createElement("button");
        var rateicon1 = document.createElement("i");
        rateicon1.className = "far fa-star";
        //ratebtn1.append(rateicon1);
        //rate2
        //var ratebtn2 = document.createElement("button");
        var rateicon2 = document.createElement("i");
        rateicon2.className = "far fa-star";
        //ratebtn2.append(rateicon2);
        //rate3
        //var ratebtn3 = document.createElement("button");
        var rateicon3 = document.createElement("i");
        rateicon3.className = "far fa-star";
        //ratebtn3.append(rateicon3);
        //rate4
        //var ratebtn4 = document.createElement("button");
        var rateicon4 = document.createElement("i");
        rateicon4.className = "far fa-star";
        //ratebtn4.append(rateicon4);
        //rate5
        //var ratebtn5 = document.createElement("button");
        var rateicon5 = document.createElement("i");
        rateicon5.className = "far fa-star";
        //ratebtn5.append(rateicon5);
        rateline.append(rateicon1);
        rateline.append(rateicon2);
        rateline.append(rateicon3);
        rateline.append(rateicon4);
        rateline.append(rateicon5); 
        
        var read = document.createElement("button");
        read.innerText = "Đọc truyện";
        read.className = "read";
        read.onclick = function(arg) {
            return function(){
                var content = document.getElementById("content");
                container.innerText = '';
                var box = document.createElement("div");
                box.className = "box";
                var n = document.createElement("p");
                n.className = "title";
                n.innerText = storiesArray[arg].name;
                var im = document.createElement("img");
                im.src = storiesArray[arg].img;
                im.className = "img";
                var a = document.createElement("p");
                a.className = "author";
                a.innerText = storiesArray[arg].author;
                var summary = document.createElement("div");
                summary.innerHTML = storiesArray[arg].sum;
                //Rating
                var rating = document.createElement("span");
                var rate = document.createElement("button");
                rate.innerText = "Đánh giá truyện";
                // rate.onclick = function(arg){
                //     return function(){
                //         var span = document.createElement("div");
                        
                //     }
                // }
                
                var tap = document.createElement("p");
                var tap1 = document.createElement("button");
                tap1.innerText = "Chương 1";
                tap1.onclick = function(arg){
                    return function(){
                        content.innerHTML = storiesArray[arg].chap1;
                    }
                }(i);
                var tap2 = document.createElement("button");
                tap2.innerText = "Chương 2";
                tap2.onclick = function(arg){
                    return function(){
                        content.innerHTML = storiesArray[arg].chap2;
                    }
                }(i);
                tap.append(tap1);
                tap.append(tap2);
                box.appendChild(im);
                box.appendChild(n);
                box.appendChild(a);
                box.appendChild(summary);
                box.appendChild(rate);
                box.appendChild(tap);
                container.appendChild(box);
            }
        }(i);
        var love = document.createElement("button");
        love.innerText = "Thêm mục yêu thích";
        love.className = "read";
        box.appendChild(im);
        love.onclick = function(arg) {
            return function() {
                arrFavo.push(storiesArray[arg]);
                alert("Đã thêm vào mục yêu thích");
                console.log(arrFavo);
            }
        }(i);
        box.appendChild(n);
        box.appendChild(rateline);
        box.appendChild(read);
        box.appendChild(love);
        container.appendChild(box);
    }
}
var arrFavo = [];
function display() {
    for (let i = 0; i < arrFavo.length; i++) {
        var box2 = document.createElement("div");
        box2.className = "box";
        var title2 = document.createElement("p");
        title2.innerText = arrFavo[i].name;
        var img2 = document.createElement("img");
        img2.src = arrFavo[i].img;
        img2.className = "img";
        var author2 = document.createElement("p");
        author2.innerText = arrFavo[i].author;

        box2.appendChild(img2);
        box2.appendChild(title2);
        box2.appendChild(author2);
        container2.appendChild(box2);
    }
}
//search
function search() {
    var searching = document.getElementById("searching").value;
    searching = searching.toLowerCase();
    displaysearch(searching);
}
function displaysearch(arg) {
    var searchResults = [];
    for (var i = 0; i < storiesArray.length; i++) {
        var nameStories = storiesArray[i].name;
        var nameStories = nameStories.toLowerCase();
        var codeCompare = nameStories.indexOf(arg);
        if (codeCompare != -1) {
            searchResults.push(storiesArray[i]);
        }
    }
    if (searchResults.length != 0) {
        container.innerHTML = '';
        displayq(searchResults);
    } else {
        alert("Not Found");
    }
}