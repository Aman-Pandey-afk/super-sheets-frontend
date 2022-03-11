import api from "./BaseApi";

const upload = function (file: File): void {
    let formData: FormData = new FormData();
    formData.append('csv', file, file.name);
    api.post('/upload', formData);
}

export default upload;