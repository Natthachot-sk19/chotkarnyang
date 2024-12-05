
function NotFound() {
  return (
    <div className='w-full h-[650px] flex flex-col justify-center items-center'>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a href="/" className='text-blue-500'>กลับสู่หน้าหลัก</a>
    </div>
  )
}

export default NotFound