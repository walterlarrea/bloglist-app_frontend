import { connect } from 'react-redux'
import { Alert } from '@mui/material'

const types = {
  GOOD: 'success',
  INFO: 'info',
  BAD: 'error',
}

const Notification = (props) => {
  return (
    props.notification.message !== ''
      ? <Alert severity={types[props.notification.type]}>
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