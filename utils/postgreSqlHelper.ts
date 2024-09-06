import { Connection, getConnectionConfig } from 'postgrejs'

export default class PostgreSqlHelper {

  private connection: Connection
  constructor() {
    this.connection = new Connection({
      host: "localhost",
      port: 5432,
      database: "postgres",
      user: "postgres",
      password: "admin",
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
