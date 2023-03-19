
// role import page to configure habits - outset

import axios from "axios";

export function hiddenHabits (profileName, setDailySchedule, setLoading) {

  if (profileName && profileName.token && setDailySchedule) {

    if (setLoading) setLoading(true)

    axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, {

        headers: {

          Authorization: `Bearer ${profileName.token}`,

        },

      }).then((res) => {

        setDailySchedule(res.data)
        if (setLoading) setLoading(false)

      }).catch((error) => {

        alert(JSON.stringify(error.response.data))
        if (setLoading) setLoading(false)
        console.log ('error found')

      }
      
      )

  }

}



export function listed (profileName, setSingleHabit, setLoading) {

  if (setLoading) setLoading(true)

  axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, {

      headers: {

        Authorization: `Bearer ${profileName.token}`,

      },
      
    }).then((res) => {

        setSingleHabit(res.data)
      if (setLoading) setLoading(false)

    }).catch((error) => {

      alert(JSON.stringify(error.response.data))
      if (setLoading) setLoading(false)
      console.log ('error found')
      
    }
    
    )
}



// role import page to configure habits - end