var que = 0;
var round = true;

var N;
var progress;

var count = 0, maxchuoi = 0, tchuoi = 0;
var questionss = new Array(" ", "artisan", "attraction", "authenticity", "cast", "craft", "craftsman", "cross", "drumhead", "embroider", "frame", "handicraft", "lacquerware", "layer", "mould", "preserve", "remind", "sculpture", "set off", "strip", "surface", "team-building", "thread", "treat", "turn up", "weave", "workshop", "affordable", "asset", "conduct", "conflict", "determine", "downtown", "dweller", "easy-going", "fabulous", "factor", "for the time being", "forbidden", "grow up", "index", "indicator", "medium-sized", "metro", "metropolitan", "multicultural", "negative", "Oceania", "packed", "reliable", "skyscraper", "stuck", "urban", "urban sprawl", "variety", "wander", "adolescence", "adulthood", "calm", "cognitive skill", "concentrate", "confident", "delighted", "depressed", "embarrassed", "emergency", "frustrated", "helpline", "house-keeping skill", "independence", "informed decision", "left out", "life skill", "relaxed", "resolve conflict", "risk taking", "self-aware", "self-disciplined", "stressed", "tense", "worried", "act out", "arctic", "bare-footed", "behave (+ oneself)", "dogsled", "domed", "downtown", "eat out", "entertain", "event", "face to face", "facility", "igloo", "illiterate", "loudspeaker", "occasion", "pass on", "post", "snack", "street vendor", "strict", "treat", "administrative", "astounding", "cavern", "citadel", "complex", "contestant", "fortress", "geological", "limestone", "measure", "paradise", "picturesque", "recognition", "rickshaw", "round (in a game)", "setting", "spectacular", "structure", "tomb", "annoyed", "astonished", "boom", "compartment", "clanging", "cooperative", "elevated walkway", "exporter", "extended family", "flyover", "manual", "mushroom", "noticeable", "nuclear family", "photo exhibition", "pedestrian", "roof", "rubber", "sandals", "thatched house", "tiled", "tram", "trench", "tunnel", "underpass");

var answerss = new Array(" ", "thợ làm nghề thủ công", "điểm hấp dẫn", "thật", "đúc (đồng,...)", "nghề thủ công, kĩ năng làm nghề thủ công", "thợ làm đồ thủ công", "đan chéo", "mặt trống", "thêu", "khung", "sản phẩm thủ công", "đồ sơn mài", "lớp (lá,...)", "đổ khuôn, tạo khuôn", "bảo vệ, bảo tồn", "gợi nhớ", "điêu khắc, đồ điêu khắc", "khởi hành", "dải", "bề mặt", "xây dụng đội ngũ", "sợi", "xử lý (chất thải,...)", "xuất hiện, đến", "đan (rổ, rá,...), dệt (vải,...)", "công xưởng, xưởng", "(giả cả) phải chăng", "tài sản", "thực hiện", "xung đột", "xác định", "(thuộc) trung tâm thành phố, khu thương mại", "cư dân", "thoải mái, dễ tính", "tuyệt vời, tuyệt diệu", "yếu tố", "hiện thời, trong lúc này", "bị cấm", "lớn lên, trưởng thành", "chỉ số", "chỉ số", "cỡ vừa, cỡ trung", "tàu điện ngầm", "(thuộc về) đô thị, thủ phủ", "đa văn hóa", "tiêu cực", "châu Đại Dương", "chật ních người", "đáng tin cậy", "nhà cao chọc trời", "mắc kẹt, không di chuyển được", "(thuộc) đô thị, thành thị", "sự đô thị hóa", "sự phong phú đa dạng", "đi lang thang", "giai đoạn vị thành niên", "giai đoạn trưởng thành", "bình tĩnh", "kĩ năng tư duy", "tập trung", "tự tin", "vui sướng", "tuyệt vọng", "xấu hổ", "tình huống khẩn cấp", "bực bội (vì không giải quyết được việc gì đó)", "đường dây nóng trợ giúp", "kĩ năng làm việc nhà", "sự độc lập, tự lập", "quyết định có cân nhắc", "cảm thấy bị bỏ rơi", "kĩ năng sống", "thoái mãi, thư giãn", "giải quyết xung đột", "liều lĩnh", "tự nhận thức, ngộ ra", "tự rèn luyện", "căng thẳng, mệt mỏi", "căng thẳng", "lo lắng", "đóng vai, diễn", "(thuộc về) Bắc cực", "chân đất", "ngoan, biết cư sử", "xe chó kéo", "hình vòm", "vào, ở trung tâm thành phố", "ăn ngoài", "giải trí", "sự kiện", "trực điện, mặt đối mặt", "phương tiện, thiết bị", "lều tuyết", "thất học", "loa", "dịp", "truyền lại, kể lại", "đăng tải", "đồ ăn vặt", "người bán hàng rong", "nghiêm khắc", "cư xử", "thuộc về hoặc liên quan đến việc quản lý, hành chính", "làm sững sờ, làm sửng sốt", "hang lớn, động", "thành lũy, thành trì", "khu liên hợp, quần thể", "đấu thủ, thí sinh", "pháo đài", "(thuộc) địa, chất", "đá vôi", "biện pháp, phương sách", "thiên đường", "đẹp, gây ấn tượng mạnh (phong cảnh)", "sự công nhận, sự thừa nhận", "xe xích lô, xe kéo", "hiệp, vòng (trong trò chơi)", "khung cảnh, môi trường", "đẹp mặt, ngoạn mục, hùng vĩ", "công trình kiến trúc, công trình xây dựng", "ngôi mộ", "bực mình, khó chịu", "kinh ngạc", "bùng nổ", "toa xe", "tiếng leng keng", "hợp tác",
"lối đi dành cho người đi bộ", "nước xuất khẩu, người xuất khẩu", "gia đình nhiều thế hệ cùng chung sống", "cầu vượt (cho xe máy, oto)", "làm (gì đó) bằng tay", "mọc lên như nấm", "gây chú ý, đáng chú ý", "gia đình hạt nhân", "triển lãm ảnh", "người đi bộ", "mái nhà", "cao su", "dép", "nhà tránh mái lá", "lợp ngói, bằng ngói", "xe điện, tàu điện", "hào giao thông", "đường hầm, cống ngầm", "đường hầm cho người đi bộ qua đường");

var unit1q = new Array(" ", "artisan", "attraction", "authenticity", "cast", "craft", "craftsman", "cross", "drumhead", "embroider", "frame", "handicraft", "lacquerware", "layer", "mould", "preserve", "remind", "sculpture", "set off", "strip", "surface", "team-building", "thread", "treat", "turn up", "weave", "workshop");
var unit1a = new Array(" ", "thợ làm nghề thủ công", "điểm hấp dẫn", "thật", "đúc (đồng,...)", "nghề thủ công, kĩ năng làm nghề thủ công", "thợ làm đồ thủ công", "đan chéo", "mặt trống", "thêu", "khung", "sản phẩm thủ công", "đồ sơn mài", "lớp (lá,...)", "đổ khuôn, tạo khuôn", "bảo vệ, bảo tồn", "gợi nhớ", "điêu khắc, đồ điêu khắc", "khởi hành", "dải", "bề mặt", "xây dụng đội ngũ", "sợi", "xử lý (chất thải,...)", "xuất hiện, đến", "đan (rổ, rá,...), dệt (vải,...)", "công xưởng, xưởng");

var unit2q = new Array(" ", "affordable", "asset", "conduct", "conflict", "determine", "downtown", "dweller", "easy-going", "fabulous", "factor", "for the time being", "forbidden", "grow up", "index", "indicator", "medium-sized", "metro", "metropolitan", "multicultural", "negative", "Oceania", "packed", "reliable", "skyscraper", "stuck", "urban", "urban sprawl", "variety", "wander");
var unit2a = new Array(" ", "(giả cả) phải chăng", "tài sản", "thực hiện", "xung đột", "xác định", "(thuộc) trung tâm thành phố, khu thương mại", "cư dân", "thoải mái, dễ tính", "tuyệt vời, tuyệt diệu", "yếu tố", "hiện thời, trong lúc này", "bị cấm", "lớn lên, trưởng thành", "chỉ số", "chỉ số", "cỡ vừa, cỡ trung", "tàu điện ngầm", "(thuộc về) đô thị, thủ phủ", "đa văn hóa", "tiêu cực", "châu Đại Dương", "chật ních người", "đáng tin cậy", "nhà cao chọc trời", "mắc kẹt, không di chuyển được", "(thuộc) đô thị, thành thị", "sự đô thị hóa", "sự phong phú đa dạng", "đi lang thang");

var unit3q = new Array(" ", "adolescence", "adulthood", "calm", "cognitive skill", "concentrate", "confident", "delighted", "depressed", "embarrassed", "emergency", "frustrated", "helpline", "house-keeping skill", "independence", "informed decision", "left out", "life skill", "relaxed", "resolve conflict", "risk taking", "self-aware", "self-disciplined", "stressed", "tense", "worried");
var unit3a = new Array(" ", "giai đoạn vị thành niên", "giai đoạn trưởng thành", "bình tĩnh", "kĩ năng tư duy", "tập trung", "tự tin", "vui sướng", "tuyệt vọng", "xấu hổ", "tình huống khẩn cấp", "bực bội (vì không giải quyết được việc gì đó)", "đường dây nóng trợ giúp", "kĩ năng làm việc nhà", "sự độc lập, tự lập", "quyết định có cân nhắc", "cảm thấy bị bỏ rơi", "kĩ năng sống", "thoái mãi, thư giãn", "giải quyết xung đột", "liều lĩnh", "tự nhận thức, ngộ ra", "tự rèn luyện", "căng thẳng, mệt mỏi", "căng thẳng", "lo lắng");

var unit4q = new Array(" ", "act out", "arctic", "bare-footed", "behave (+ oneself)", "dogsled", "domed", "downtown", "eat out", "entertain", "event", "face to face", "facility", "igloo", "illiterate", "loudspeaker", "occasion", "pass on", "post", "snack", "street vendor", "strict", "treat");
var unit4a = new Array(" ", "đóng vai, diễn", "(thuộc về) Bắc cực", "chân đất", "ngoan, biết cư sử", "xe chó kéo", "hình vòm", "vào, ở trung tâm thành phố", "ăn ngoài", "giải trí", "sự kiện", "trực điện, mặt đối mặt", "phương tiện, thiết bị", "lều tuyết", "thất học", "loa", "dịp", "truyền lại, kể lại", "đăng tải", "đồ ăn vặt", "người bán hàng rong", "nghiêm khắc", "cư xử");

var unit5q = new Array(" ", "administrative", "astounding", "cavern", "citadel", "complex", "contestant", "fortress", "geological", "limestone", "measure", "paradise", "picturesque", "recognition", "rickshaw", "round (in a game)", "setting", "spectacular", "structure", "tomb");
var unit5a = new Array(" ", "thuộc về hoặc liên quan đến việc quản lý, hành chính", "làm sững sờ, làm sửng sốt", "hang lớn, động", "thành lũy, thành trì", "khu liên hợp, quần thể", "đấu thủ, thí sinh", "pháo đài", "(thuộc) địa, chất", "đá vôi", "biện pháp, phương sách", "thiên đường", "đẹp, gây ấn tượng mạnh (phong cảnh)", "sự công nhận, sự thừa nhận", "xe xích lô, xe kéo", "hiệp, vòng (trong trò chơi)", "khung cảnh, môi trường", "đẹp mặt, ngoạn mục, hùng vĩ", "công trình kiến trúc, công trình xây dựng", "ngôi mộ");

var unit6q = new Array(" ", "annoyed", "astonished", "boom", "compartment", "clanging", "cooperative", "elevated walkway", "exporter", "extended family", "flyover", "manual", "mushroom", "noticeable", "nuclear family", "photo exhibition", "pedestrian", "roof", "rubber", "sandals", "thatched house", "tiled", "tram", "trench", "tunnel", "underpass");
var unit6a = new Array(" ", "bực mình, khó chịu", "kinh ngạc", "bùng nổ", "toa xe", "tiếng leng keng", "hợp tác",
"lối đi dành cho người đi bộ", "nước xuất khẩu, người xuất khẩu", "gia đình nhiều thế hệ cùng chung sống", "cầu vượt (cho xe máy, oto)", "làm (gì đó) bằng tay", "mọc lên như nấm", "gây chú ý, đáng chú ý", "gia đình hạt nhân", "triển lãm ảnh", "người đi bộ", "mái nhà", "cao su", "dép", "nhà tránh mái lá", "lợp ngói, bằng ngói", "xe điện, tàu điện", "hào giao thông", "đường hầm, cống ngầm", "đường hầm cho người đi bộ qua đường");

// var unitq = new Array();
// var unita = new Array();

var r = new Array();
r.fill(true);
r[0] = false;

var colors = new Array("0", "cl1", "cl2", "cl3", "cl4");
var r_cl = new Array();
// for (let index = 0; index <= 146; index++) {
//      console.log(questions[index], ":",  answers[index]);
// }

var units = -1;
var questions = new Array();
var answers = new Array();

function print(unit) {
     if (units == -1) {
          switch (unit) {
               case 1:
                    units = 1;
                    questions = unit1q;
                    answers = unit1a;
                    break;
               case 2:
                    units = 2;
                    questions = unit2q;
                    answers = unit2a;
                    break;
               case 3:
                    units = 3;
                    questions = unit3q;
                    answers = unit3a;
                    break;
               case 4:
                    units = 4;
                    questions = unit4q;
                    answers = unit4a;
                    break;
               case 5:
                    units = 5;
                    questions = unit5q;
                    answers = unit5a;
                    break;
               case 6:
                    units = 6;
                    questions = unit6q;
                    answers = unit6a;
                    break;
               default:
                    break;
          }
          N = questions.length;
          progress = N-1;
     }
     if (progress == 0) {
          maxchuoi = Math.max(maxchuoi, tchuoi);
          tchuoi = 0;
          var html =
          `<a href="../index.html" class="comeback-box">
               <div class="round"> bạn đã hoàn thành ` + (N - 1) + ` câu hỏi trong ` + count + ` lượt </div>
               <div class="chuoi">chuỗi ` + maxchuoi + ` câu trả lời đúng liên tiếp</div>
               <p class="text">#bấm vào nơi bất kì để trở lại</p>
          </a>`;
          document.getElementById("main-body").innerHTML = html;
     }
     else {
          // console.log(units, progress);
          ++count;
          while (r[que] == false || round == true) {
               que = Math.floor(Math.random() * N);
               round = false;
          }

          r_cl[1] = Math.floor(Math.random() * N);
          r_cl[2] = Math.floor(Math.random() * N);
          r_cl[3] = Math.floor(Math.random() * N);
          r_cl[4] = Math.floor(Math.random() * N);

          for (let i = 1; i <= 3; ++i) {
               for (let j = i + 1; j <= 4; ++j) {
                    if (r_cl[j] >= r_cl[i]) {
                         var T = r_cl[j];
                         r_cl[j] = r_cl[i];
                         r_cl[i] = T;

                         var T1 = colors[i];
                         colors[i] = colors[j];
                         colors[j] = T1;
                    }
               }
          }

          var html = `<p>` + questions[que] + `</p>`;
          document.getElementById("question").innerHTML = html;

          var a1 = que;
          var a2 = a1;
          var a3 = a1;
          var a4 = a1;

          while (a2 == a1 || a2 == a3 || a2 == a4 || a2 == 0) {
               a2 = Math.floor(Math.random() * N);
          }
          while (a3 == a1 || a3 == a2 || a3 == a4 || a3 == 0) {
               a3 = Math.floor(Math.random() * N);
          }
          while (a4 == a1 || a4 == a2 || a4 == a3 || a4 == 0) {
               a4 = Math.floor(Math.random() * N);
          }

          var pos_answer = Math.floor(Math.random() * 4) + 1;
          var html1 = `<p id="true" class="box-answer ` + colors[1] + `" onclick="check_answer('1')">` + answers[a1] + `</p>`;
          document.getElementById("answer").innerHTML = html1;
          var html2 = `<p class="box-answer ` + colors[2] + `" onclick="check_answer('0')">` + answers[a2] + `</pid=>`;
          var html3 = `<p class="box-answer ` + colors[3] + `" onclick="check_answer('0')">` + answers[a3] + `</pid=>`;
          var html4 = `<p class="box-answer ` + colors[4] + `" onclick="check_answer('0')">` + answers[a4] + `</pid=>`;

          if (pos_answer == 1) {
               document.getElementById('answer').insertAdjacentHTML("beforeend", html2);
               document.getElementById('answer').insertAdjacentHTML("beforeend", html3);
               document.getElementById('answer').insertAdjacentHTML("beforeend", html4);
          } else
               if (pos_answer == 2) {
                    document.getElementById('answer').insertAdjacentHTML("afterbegin", html2);
                    document.getElementById('answer').insertAdjacentHTML("beforeend", html3);
                    document.getElementById('answer').insertAdjacentHTML("beforeend", html4);
               } else
                    if (pos_answer == 3) {
                         document.getElementById('answer').insertAdjacentHTML("afterbegin", html2);
                         document.getElementById('answer').insertAdjacentHTML("afterbegin", html3);
                         document.getElementById('answer').insertAdjacentHTML("beforeend", html4);
                    } else
                         if (pos_answer == 4) {
                              document.getElementById('answer').insertAdjacentHTML("afterbegin", html2);
                              document.getElementById('answer').insertAdjacentHTML("afterbegin", html3);
                              document.getElementById('answer').insertAdjacentHTML("afterbegin", html4);
                         }
     }
}

function check_answer(value) {
     if (value == 1) {
          document.getElementById("check_ans").style.display = "flex";
          document.getElementById("c2").style.display = "none";

          r[que] = false;
          --progress;
          ++tchuoi;
     } else {
          document.getElementById("check_ans").style.display = "flex";
          document.getElementById("c1").style.display = "none";

          var true_answer = document.getElementById("question").innerHTML + document.getElementById("true").innerHTML;
          document.getElementById("true_ans").innerHTML = true_answer;

          round = true;
          maxchuoi = Math.max(maxchuoi, tchuoi);
          tchuoi = 0;
     }
}

function close_tab() {
     document.getElementById("check_ans").style.display = "none";
     document.getElementById("true_ans").innerHTML = "";
     document.getElementById("c1").style.display = "flex";
     document.getElementById("c2").style.display = "flex";
     print(units);
}