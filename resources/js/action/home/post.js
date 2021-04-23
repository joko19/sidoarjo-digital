import instance from "../instance";

const index = () => instance.get("/api/post/");
const myAdventure = (dataUser) => instance.get("/api/post/" + dataUser);
const getCover = (namePlace) =>
  instance.get("/api/destination/cover/" + namePlace);
const totalExperience = (username) =>
  instance.get("/api/post/countExperience/" + username);
const deletePost = (idUser, nameImg) =>
  instance.delete("/api/post/" + idUser, { data: { filename: nameImg } });
const deletePostText = (idUser) =>
  instance.delete("/api/post/onlyText/" + idUser);
const newPost = (postData) => instance.post("/api/post/newPost", postData);
const video = (postData) => instance.post("/api/post/video", postData);
const thumbnail = (postData) => instance.post("/api/post/thumbnail", postData);
const newExperience = (postData) =>
  instance.post("/api/post/newExperience", postData);
const view = (idPost) => instance.get("/api/post/view/" + idPost);
const countExperience = (username) => instance.get("/api/post/countExperience/" + username)
const listPost = () => instance.get('/api/post/review/listpost')

const apiPost = {
  index,
  myAdventure,
  getCover,
  totalExperience,
  deletePost,
  deletePostText,
  newPost,
  video,
  thumbnail,
  newExperience,
  view,
  countExperience,
  listPost
};

export default apiPost;
