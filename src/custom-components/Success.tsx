

const Success = () => {
  return (
    <div className='flex w-full flex-col'>
         <div className='mt-20 h-[2px] bg-[var(--primary-yellow)] w-full'></div>
      <div className='flex justify-between mt-4'>
        <div className='flex flex-col justify-center items-center'>
            <h1 > <span className='text-[var(--primary-yellow)]'>42%</span></h1>
        <p>Incraese in WAEC success rate </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1 > <span className='text-[var(--primary-yellow)]'>X2</span></h1>
       
          <p>Market income in commerce</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 > <span className='text-[var(--primary-yellow)]'>200,000</span></h1>
          <p>persons use our BRT system daily</p>
        </div>
      </div>
    </div>
  )
}

export default Success