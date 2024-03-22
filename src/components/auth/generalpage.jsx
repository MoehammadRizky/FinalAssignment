import React from "react";

const GeneralPage = () => {
  return (
    <div className="">
      {" "}
      <div className=" border-2 border-black rounded-md flex justify-between items-center p-4 m-4">
        <div className="font-bold text-lg">TempatNugas</div>
        <button className="btn "><a href="/login">Login As admin</a></button>
      </div>
      <div className="border-2 border-black rounded-md p-4 m-4  flex justify-between mt-[50px]">
        {" "}
        <div className=" mb-5">
          <h1 className="font-bold ml-7 mt-[100px] text-3xl ">
            Find best places to work with peers and connections.
          </h1>
          <p className="ml-7 mt-3">
            good places to work, meet, and connect with people in person in
            Indonesia.
          </p>
        </div>
        <img className="w-[400px] mr-7" src="image.png" alt="" />
      </div>
      <div className="border-2 border-black rounded-md p-4 m-4 ">
      <div className="font-bold text-xl">Cafe:</div>
        {" "}
        <div className="card mt-[30px] card-compact w-[250px] bg-base-100 shadow-xl">

          <div className="card-body">
            <h2 className="card-title">Cafe #1</h2>
            <p>If a dog chews shoes </p>
            <p>If a dog chews shoes </p>
            <p>If a dog chews shoes </p>
            <p>If a dog chews shoes </p>
            <p>If a dog chews shoes </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary h-3 text-xs ">Check at google Map!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralPage;
