import React from 'react'
import { Provider } from 'react-redux'
import FormCom from './Component/FormCom'
import store from './redux/App/Store'

export default function ReduxCrudApp() {
  return (
    <div>
        <Provider store={store}>
            <FormCom /> 
        </Provider>
    </div>
  )
}
