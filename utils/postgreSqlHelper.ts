import { Connection } from 'postgrejs'

export default class PostgreSqlHelper {

  private connection: Connection
  constructor() {
    this.connection = new Connection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      ssl: false
    })
  }

  // Method to execute a query
  async executeQuery(query: string) {
    try{
      await this.connection.connect()
    }catch(e){
      console.error("Failed to connect database server")
      throw e
    }
    
    const result = await this.connection.query(query);
    const rows = result.rows
    await this.connection.close()
    return rows
  }
}
