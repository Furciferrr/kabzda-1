const ADD_MESSAGE = 'ADD-MESSAGE';


type dialogsType = {
  id: number
  name: string
  dialogAvaLink: string
}

type messagesType = {
  id: number
  message: string
}

let initialState = {
  dialogData:[
    {id: 1, name: 'Dimych', dialogAvaLink:'https://i.pinimg.com/236x/54/13/e2/5413e250d1eecb821fc49c3213d7d661--search.jpg'},
    {id: 2, name: 'Masha', dialogAvaLink:'https://bipbap.ru/wp-content/uploads/2018/02/1378847521_1806552374.jpg'},
    {id: 3, name: 'Sveta', dialogAvaLink:'https://sun9-17.userapi.com/impf/4WuzlR38g8VZ7SDAE26PZMvN8ymWBgFKfvnJcg/mh2Zr1zacro.jpg?size=200x0&quality=90&crop=22,0,560,580&sign=ce0a6e9cd38861cbf30a89d01eb50ce1&ava=1'},
    {id: 4, name: 'Saha', dialogAvaLink:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCo1Qx_f-i5jibEv8Aa7D5lOYSClFPsq6b8g&usqp=CAU'},
    {id: 5, name: 'Vadim', dialogAvaLink:'https://sun9-58.userapi.com/impf/c627624/v627624661/2fe3/b_qSlC2kZIo.jpg?size=200x0&quality=90&crop=0,0,501,604&sign=f020e3d674d8d1299729deee44221885&ava=1'}] as Array <dialogsType>,

  messagesData: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What the fuck?'}] as Array <messagesType>,

    chengeMessage: '' as string
}

export type InitialMessagesStateType = typeof initialState

const messagePageReducer = (state = initialState, action: ActionsType) : InitialMessagesStateType => {
  switch(action.type) {
    case ADD_MESSAGE: 
      return {
        ...state,
        chengeMessage: '',
        messagesData: [...state.messagesData, 
          {id: state.messagesData.length + 1,
          message: action.message} ]
      };
      
    default:
      return state; 
  }
}


type addMessageActionType = {
  type: typeof ADD_MESSAGE 
  message: string
}

type ActionsType = addMessageActionType

export const addMessageActionCreater = (messageValue: string): addMessageActionType => {
    return(
      {type: ADD_MESSAGE, message: messageValue}
    )
   }
  


export default messagePageReducer