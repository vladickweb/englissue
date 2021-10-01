import axios from 'axios';

class MessageService {
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/chatmessages`,
      withCredentials: true
    })
  }


  createMessage = (data) => this.instance.post(`/${data.id}`, data)
  checkNewMessages = (id) => this.instance.get(`/${id}`)

}

export default MessageService;