const cloud = require('wx-server-sdk')

cloud.init({env:"smbu-1g75p1bb048a4d95"})

const db = cloud.database()

exports.main = async (event, context) => {
  try {
        // Fetch one Russian word from 'word' collection
    const rusResult = await db.collection('word').limit(1).get()
        
        // Fetch one Chinese word from 'chword' collection where the ID matches
    const chResult = await db.collection('chword').where({ id: rusResult.data[0].id }).limit(1).get()

    return {
      rusWord: rusResult.data[0],
      chWord: chResult.data[0]
    }
  } catch (e) {
    console.error(e)
    return {
      error: e.toString()
    }
  }
}