//좋아요 상위 4개 요리 가져오기
function get_Favorite(){

}

// 재료 담을 리스트 생성
let ing_list = [];

// 선택 버튼 누르면 동작하는 함수
function add_ing_list() {
    let item = document.getElementById("ingredient").value;
    console.log(item)
    ing_list.push(item+"_");

    let selected_box = $("#selected");
    selected_box.show();

    let item_list = $("#selected-item-list");
    item_list.append("<li>"+item+"</li>");
    temp(item_list);
}


function temp(item_list) {
    console.log(item_list);
}

function to_recommend() {
    var ingredient = $('#ingredient').val();
    $.ajax({
        type: "POST",
        url: "/recommend/search",
        data: {ing_give: ingredient},
        success: function (response) {
            console.log(response)
        }
    })
    var link = "/recommend"
    location.href = link;
}