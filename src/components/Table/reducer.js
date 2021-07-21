export default function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isLoading: true, error: null };
    case "save":
      return { ...state, isLoading: false, data: action.payload };
    case "error":
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
}
