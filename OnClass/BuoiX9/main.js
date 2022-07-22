const student = [];

function btnAddClick() {

    const input_name = document.getElementById('input_name').value;
    const input_age = document.getElementById('input_age').value;
    const input_address = document.getElementById('input_address').value;
    
    if( input_name == "" || input_age == "" || input_address == "") {
        alert("Không được để trống dữ liệu");
        
    }
    else {
        console.log('Đã theem 1 sinh viên');
        addStudent(input_name, input_age, input_address);
    }
}
function addStudent(name, age, address) {
    student.push({name, age, address});
    console.log(student);
    
}
function showStudent() {
    console.log('Đã gọi được hàm');
    var ul = document.getElementById("list_student");
    var li = document.createElement("li");
    student.forEach(
        item => {
            var children = ul.children.length + 1
            li.setAttribute("id", "element"+children);
            li.appendChild(document.createTextNode("Tên: " + item.name +"/ Tuổi: " + item.age + "/ Địa chỉ: " + item.address));
            ul.appendChild(li)
        }
    );
    
}
function btnShowClick() {
    showStudent();
}