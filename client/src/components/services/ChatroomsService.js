import axios from 'axios';

class ChatroomService {
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/chatrooms`,
      withCredentials: true
    })
  }

  getChatrooms = () => this.instance.get("/");
  getOneChatroom = (id) => this.instance.get(`/${id}`);
//   createCoaster = (coaster) => this.instance.post("/", coaster);
}

export default ChatroomService;