import './Loading.css'

const Loading = () => {
  return (
    <>
      <div className='loading'>
        <div className='card'>
          <div style={{ marginTop: '2em' }}>
            <div className='container'>
              <p className='loading'>
                <b>LOADING...</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loading