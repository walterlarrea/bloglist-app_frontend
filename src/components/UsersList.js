import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const Users = () => {
  const navigate = useNavigate()
  const usersList = useSelector(({ user }) => user.usersList)

  return (
    <>
      <h2 className='mt-4 text-lg'>Users</h2>
      <hr />

      <div className='flex justify-center mt-4 text-gray-700'>
        <table className='w-10/12 md:w-2/3'>
          <thead>
            <tr>
              <td>Name</td>
              <td className='w-32'>Blogs created</td>
            </tr>
          </thead>
          <tbody>
            {usersList.map(user =>
              <tr
                key={user.id}
                className='cursor-pointer hover:bg-emerald-50'
                onClick={() => navigate(`/users/${user.id}`)}>
                <td className='py-2'>
                  <span className='capitalize'>
                    <FiberManualRecordIcon className='me-4' />
                    {user.name}</span>
                </td>
                <td>
                  {user.blogs.length}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Users