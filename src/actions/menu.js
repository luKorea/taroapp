//显示抽屉
export function showDrawer(){
  return (dispatch)=>{
    dispatch({type:'showDrawer'})
  }
}
//隐藏抽屉
export function hideDrawer(){
  return (dispatch)=>{
    dispatch({type:'hideDrawer'})
  }
}
export function changeCata(currentCata) {
  return (dispatch) => {
    dispatch({type: 'changeCata', currentCata})
  }
}
