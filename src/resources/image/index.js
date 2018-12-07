import axios from "axios";

export const upload = file => {
  const url = "https://api.cloudinary.com/v1_1/tpdthau/upload";
  const fd = new FormData();
  fd.append("upload_preset", "tpdthau");
  fd.append("tags", "browser_upload");
  fd.append("file", file);
  return axios({
    url: url,
    method: "POST",
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    },
    data: fd
  });
};
