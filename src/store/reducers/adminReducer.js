import actionTypes from "../actions/actionTypes"

const initialState = {
  isLoadingGender: false,
  genders: [],
  roles: [],
  positions: [],
}

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      let copyState = { ...state }

      copyState.isLoadingGender = true

      // console.log("fire fetch gender start", action)
      return {
        ...copyState,
      }
    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.data
      state.isLoadingGender = false

      // console.log("gender success", action)
      return {
        ...state,
      }

    case actionTypes.FETCH_GENDER_FAILED:
      console.log("fire fetch gender FAILED", action)

      state.isLoadingGender = false

      state.genders = []

      return {
        ...state,
      }
    case actionTypes.FETCH_POSITION_START:
      let copyStatePosition = { ...state }

      // console.log("fire fetch POSITION start", action)
      return {
        ...copyStatePosition,
      }
    case actionTypes.FETCH_POSITION_SUCCESS:
      state.positions = action.data

      // console.log("POSITION success", action)
      return {
        ...state,
      }

    case actionTypes.FETCH_POSITION_FAILED:
      state.positions = []

      return {
        ...state,
      }
    case actionTypes.FETCH_ROLE_START:
      let copyStateRole = { ...state }

      return {
        ...copyStateRole,
      }
    case actionTypes.FETCH_ROLE_SUCCESS:
      state.roles = action.data

      return {
        ...state,
      }

    case actionTypes.FETCH_ROLEID_FAILED:
      state.roles = []

      return {
        ...state,
      }
    case actionTypes.CREATE_USER_SUCCESS:
      state.roles = action.data

      return {
        ...state,
      }
    default:
      return state
  }
}

export default adminReducer
