import React from 'react'

export default function AddClient() {
  return (
    <div className='wrapper'>
      <div className='form-wrap'>
        <h1 className='title'>Add a new client</h1>
        <form className='input-form'>
          <section className='top-add'>
            <input
              type='text'
              name='first_name'
              placeholder='First name'
            />
            <input
              type='text'
              name='last_name'
              placeholder='Last name'
            />
            <input
              type='email'
              name='email'
              placeholder='Email address'
            />
          </section>  
          <section className='date-add'>
            <label for='dob'>DOB</label>
            <input
              type='date'
              name='dob'
            />
            <label for='date'>Date</label>
            <input
              type='date'
              name='date'
            />
          </section>
          <section className='content-add'>
            <label for='occupation'>Occupation/Sports/Hobbies</label>
            <textarea
              id='occupation'
              name='occupation'
              rows='3'
              columns='10'
            />
            <label for="medical">Medical/Injuries</label>
            <textarea
              id='medical'
              name='medical'
              rows='3'
              columns='30'
            />
            <label for="goals">Goals/Specific Areas</label>
            <textarea
              id='goals'
              name='goals'
              rows='3'
              columns='30'
            />
            <label for='assessment'>Assessment/Comments/Home Program</label>
            <textarea
              id='assessment'
              name='assessment'
              rows='3'
              columns='30'
            />
            <label for="additional">Additional Exercises/Stretches</label>
            <textarea
              id='additional'
              name='additional'
              rows='3'
              columns='30'
            />
          </section>

          <button className='hero-btn'>Add client</button>
          
        </form>
      </div>
      
    </div>
  )
}
