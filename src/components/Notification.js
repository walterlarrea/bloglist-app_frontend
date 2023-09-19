import { connect } from 'react-redux'
import { Alert } from '@mui/material'

const Notification = (props) => {
  return (
    props.notification.message !== ''
      ? <Alert severity={props.notification.type === 'GOOD' ? 'success' : 'error'}>
        {props.notification.message}
      </Alert>
      :
      ''
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Notification)