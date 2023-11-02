import React, { useState } from "react";

/*
b1 : lấy dữ liệu data từ props truyền qua
b2 : đùng hàm map để hiển thị dữ liệu ra
---- code trạng thái hiện thị và ẩn
b3 : khởi tạo state cho nó với trạng thái true or fale
b4 : detructring lấy giá trị trạng thái
b5 : đặt trạng thái if true thì hiển thị không thì ẩn .
b6 : viết event click set  thay đổi status 

*/
const Childcomponent = (props) => {
  const { arrJobs } = props;
  const [showJobs, setShowJobs] = useState(
    {
      showjobs: true, //sử lý đặt trạng thái
    },
    []
  );

  const { showjobs } = showJobs; //detructring ra

  //b6

  const onHanldeShowHide = (status) => {
    setShowJobs({
      showjobs: status,
    });
  };

  const check = showjobs === true ? "showjobs = true " : "showjobs = false";
  console.log(">>check :", check);
  return (
    //nếu showjobs == true thì button show hiển thị k thì ẩn
    <div>
      <>
        {showjobs && (
          <div>
            <button onClick={() => onHanldeShowHide(false)}>Show</button>
          </div>
        )}{" "}
        {showjobs === false && (
          //nếu showjobs == false đoạn code hiển thị k thì ẩn  vì có 2 khối nên ta cho <> </> vào
          <>
            <div>
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    <div>
                      {item.title} - {item.price}{" "}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => onHanldeShowHide(true)}>Hide</button>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Childcomponent;
