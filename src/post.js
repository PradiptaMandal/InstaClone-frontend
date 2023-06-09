import React, { useState, useEffect } from "react";
import Header from "./header";

const Post = () => {
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    fetch("https://instaclone-pradipta.onrender.com/posts")
      .then((res) => res.json())
      .then((postData) => {
        setAllPost(postData);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  let monthNo = new Date().getMonth();
  let month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date =
    new Date().getDate() +
    " " +
    month[monthNo] +
    " " +
    new Date().getFullYear();

  return (
    <>
      <Header />
      <div style={main}>
        {allPost.length > 0 ? (
          allPost.map((ele) => (
            <div style={post} key={ele.id}>
              <div style={row1}>
                <div>
                  <label>
                    <b>{ele.name}</b>
                  </label>
                  <br />
                  <label style={{ color: "gray" }}>{ele.location}</label>
                </div>
                <img src="3Dots.jpg" style={{ height: "50px" }} alt="" />
              </div>
              <div style={row2}>
                <img
                  src={ele.postImage}
                  style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
                  alt=""
                />
              </div>
              <div style={row3}>
                <img src="likes.jpg" style={{ width: "100px" }} alt="" />
                <label
                  style={{
                    fontSize: "16px",
                    color: "gray",
                    paddingLeft: "35px",
                  }}
                >
                  {date}
                </label>
              </div>
              <div style={row4}>
                <label
                  style={{
                    fontSize: "14px",
                    color: "gray",
                    paddingLeft: "30px",
                  }}
                >
                  {ele.likes} likes
                </label>
              </div>
              <div style={row5}>
                <p>{ele.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

const main = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  top: "100px",
};

const post = {
  width: "450px",
  height: "450px",
  border: "1px solid silver",
  borderRadius: "4px",
  margin: "10px 0",
  padding: "0",
};

const row2 = {
  height: "60%",
  width: "100%",
};

const row1 = {
  height: "10%",
  width: "91%",
  padding: "10px 26px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const row3 = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "91%",
  height: "5%",
  padding: "8px 16px",
};

const row5 = {
  fontWeight: "bold",
  paddingLeft: "30px",
  fontSize: "16px",
  height: "5%",
};

const row4 = {
  height: "4%",
};

export default Post;
