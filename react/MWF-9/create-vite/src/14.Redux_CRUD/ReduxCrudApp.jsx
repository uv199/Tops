import React from 'react'
import { Provider } from 'react-redux'
import FormCom from './Component/FormCom'
import store from './redux/App/store'
import UserTable from './Component/UserTable'

export default function ReduxCrudApp() {
  return (
    <div>
        <Provider store={store}>
            <FormCom /> 
            <UserTable/>
        </Provider>
    </div>
  )
}
