import { test, expect } from "./supports/extenedTest"
import PostgreSqlHelper from '../../../utils/postgreSqlHelper';

test("query DB", async ()=>{
    const dbHelper = new PostgreSqlHelper()
    const rows = await dbHelper.executeQuery("select * from \"Dest\"")
    console.log(rows)
    expect(rows?.length).toBeGreaterThan(0)
    
})

test("insert DB", async ()=>{
    const dbHelper = new PostgreSqlHelper()
    const col1 = "EmployeeId"
    const col2 = "Name"
    const queryStr = `
        INSERT INTO "Dest" ("${col1}", "${col2}", "Phone", "Hiredate") VALUES
        (666,	'Nam Nguyen',	6668088606,	'2024-09-06'),
        (555,	'Duc Mai',	5665905717,	'2024-09-06'); 
    `
    const rows = await dbHelper.executeQuery(queryStr)
    console.log(rows)
    
})