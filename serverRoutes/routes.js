const pool = require('../data/config')
const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        })
    }),
	//___________________________________________
	//  get all drivers
	//___________________________________________
	app.get('/driversall', (request, response) => {
 
		pool.query('SELECT * FROM drivers WHERE dr_del != 1', (error, result) => {
			if (error) throw error
 
			response.send(result)
		})
	}),
	//___________________________________________
	//  get all workshops
	//___________________________________________
	app.get('/workshopsall', (request, response) => {
 
		pool.query('SELECT * FROM workshops WHERE sh_del != 1', (error, result) => {
			if (error) throw error
 
			response.send(result)
		})
	}),
	//___________________________________________
	//  get all loaders
	//___________________________________________
	app.get('/loadersall', (request, response) => {
 
		pool.query('SELECT * FROM loaders WHERE l_del != 1', (error, result) => {
			if (error) throw error
 
			response.send(result)
		})
	}),
	
	//___________________________________________
	//  get all systems
	//___________________________________________
	app.get('/systemsall', (request, response) => {
 
		pool.query('SELECT * FROM loadersystems', (error, result) => {
			if (error) throw error
 
			response.send(result)
		})
	}),
	//___________________________________________
	//  get admin
	//___________________________________________
	app.get('/loginadmin/:admname/:admpass', (request, response) => {

		const aname = request.params.admname 
		const pass = request.params.admpass
		
		pool.query('SELECT * FROM admins WHERE log_in = ?', aname, (error, result) => {
			let ret_result = result[0]
			if (ret_result) {
//			response.send(result)
			console.log("from login ret_result login==",ret_result.log_in);
			console.log("from login ret_result name==",ret_result.ad_name);
			console.log("from login ret_result pass==",ret_result.pass_word);
			let is_pass = (ret_result.pass_word==pass) ? true : false
			response.send(is_pass)
			} else {
				response.send(false)
			}
//		let is_pass = result.TextRow.pass_word;
//		console.log("from login is_pass ==",is_pass);	
//		let for_ret =(result.statusText=='OK')? response.send(true) : response.send(false)
			if (error) throw error
		})
	}),
	//________________________________________________
	// Add a new driver
	//________________________________________________
	app.post('/newdriver', (request, response) => {
	
		pool.query('INSERT INTO drivers SET ?', request.body, (error, result) => {
			if (error) throw error
	
			response.status(201).send(`${result.insertId}`)
		})
	}),
	//___________________________________________
	//  get stat from date (param) :date :id
	//___________________________________________
	app.get('/statbyiddate/:datestart/:dateend/:iddr/:idload/:idshop', (request, response) => {
		const fromdate = request.params.datestart 
		const todate = request.params.dateend
		const driver_id = request.params.iddr
		const loader_id = request.params.idload
		const shop_id = request.params.idshop
		var add_param = ` where 1 `
			if (driver_id != 'null') {add_param += ` AND drivers.id = ${driver_id}` }
			if (loader_id != 'null') {add_param += ` AND loaders.id = ${loader_id}` }
			if (shop_id != 'null') {add_param += ` AND workshops.id = ${shop_id}` }
			if (fromdate != 'null') {add_param += ` AND dr_orders.date_in >= '${fromdate}'` }
			if (todate != 'null') {add_param += ` AND dr_orders.date_in <= '${todate}'` }
		console.log("statbyiddate==",fromdate,"--",todate,"==",driver_id,"==",loader_id,"---",shop_id)
		console.log("statbyiddate add_param==",add_param)
//		pool.query('SELECT drivers.dl_name,sklad.loadersystems.ldsys_name,table_sys.value_sys, dr_orders.date_in FROM sklad.table_sys,sklad.drivers,sklad.dr_orders INNER JOIN  sklad.loadersystems WHERE drivers.id = table_sys.id_dr_order and loadersystems.id = table_sys.id_loader_sys AND drivers.id = 2',(error, result) => {
//		pool.query(`SELECT drivers.dl_name,loaders.l_name,loadersystems.ldsys_name,table_sys.value_sys,dr_orders.date_in,workshops.wk_name FROM dr_orders INNER JOIN  table_sys ON sklad.table_sys.id_dr_order = dr_orders.id INNER JOIN loaders ON sklad.dr_orders.id = sklad.loaders.id INNER JOIN drivers ON sklad.dr_orders.id_driver = drivers.id INNER JOIN loadersystems ON table_sys.id_loader_sys = loadersystems.id INNER JOIN workshops ON dr_orders.id_workshop = workshops.id ${add_param}`,(error, result) => {
/*
		pool.query(`SELECT drivers.dl_name,loaders.l_name,dr_orders.date_in,workshops.wk_name,GROUP_CONCAT(value_sys ORDER BY id_loader_sys ASC) as check_systems
 FROM dr_orders INNER JOIN  table_sys ON sklad.table_sys.id_dr_order = dr_orders.id 
INNER JOIN loaders ON sklad.dr_orders.id = sklad.loaders.id 
INNER JOIN drivers ON sklad.dr_orders.id_driver = drivers.id 
INNER JOIN loadersystems ON table_sys.id_loader_sys = loadersystems.id 
INNER JOIN workshops ON dr_orders.id_workshop = workshops.id ${add_param} GROUP BY id_dr_order`,(error, result) => {
*/
		pool.query(`SELECT drivers.dl_name,loaders.l_name,dr_orders.date_in,workshops.wk_name,
 SUBSTRING_INDEX(GROUP_CONCAT(value_sys SEPARATOR ','),',',1)  as LS1,
 SUBSTRING_INDEX(substring_index(GROUP_CONCAT(value_sys ORDER BY id_loader_sys ASC SEPARATOR ','),',',2),",",-1) as LS2, 
 SUBSTRING_INDEX(substring_index(GROUP_CONCAT(value_sys ORDER BY id_loader_sys ASC SEPARATOR ','),',',3),",",-1) as LS3,
 SUBSTRING_INDEX(substring_index(GROUP_CONCAT(value_sys ORDER BY id_loader_sys ASC SEPARATOR ','),',',4),",",-1) as LS4, 
 SUBSTRING_INDEX(substring_index(GROUP_CONCAT(value_sys ORDER BY id_loader_sys ASC SEPARATOR ','),',',5),",",-1) as LS5, 
 SUBSTRING_INDEX(substring_index(GROUP_CONCAT(value_sys ORDER BY id_loader_sys ASC SEPARATOR ','),',',6),",",-1) as LS6, 
 SUBSTRING_INDEX(substring_index(GROUP_CONCAT(value_sys ORDER BY id_loader_sys ASC SEPARATOR ','),',',7),",",-1) as LS7,
 SUBSTRING_INDEX(substring_index(GROUP_CONCAT(value_sys ORDER BY id_loader_sys ASC SEPARATOR ','),',',8),",",-1) as LS8		
 FROM dr_orders INNER JOIN  table_sys ON sklad.table_sys.id_dr_order = dr_orders.id 
INNER JOIN loaders ON sklad.dr_orders.id = sklad.loaders.id 
INNER JOIN drivers ON sklad.dr_orders.id_driver = drivers.id 
INNER JOIN loadersystems ON table_sys.id_loader_sys = loadersystems.id 
INNER JOIN workshops ON dr_orders.id_workshop = workshops.id ${add_param} GROUP BY id_dr_order`,(error, result) => {


			if (error) throw error
		response.send(result)
		})
	}),
	//___________________________________________
	//  get count of all from frombase (param)
	//___________________________________________
	app.get('/fullfrom/:frombase', (request, response) => {

		const frombase = request.params.frombase
		pool.query('SELECT COUNT(*) as total FROM ? ', frombase, (error, result) => {
			if (error) throw error
		response.send(result)
		})
	}),
	//___________________________________________
	//  get count of all drivers
	//___________________________________________
	app.get('/driversfull', (request, response) => {
 
		pool.query('SELECT COUNT(*) as total FROM drivers ', (error, result) => {
			if (error) throw error
 
			response.send(result)
		})
	}),
	//___________________________________________
	// Add a new order
	//___________________________________________
	app.post('/orders', (request, response) => {
//		request.body.date = new Date(request.body.date)
		pool.query('INSERT INTO dr_orders  SET date_in = now(),?', request.body, (error, result) => {
		     console.log("req==",request.body)
//			 console.log(JSON.parse(request.body))
//			console.log("req==",request.body.driver)
//			console.log("req==",request.body.loader)
//			console.log("req==",request.body.workshop)
//			console.log("req==",request.body.date)
			if (error) throw error
//			console.log("result.insertId==",result.insertId)
			response.status(201).send(`${result.insertId}`)
		})
	}),	
	//___________________________________________
	// Add a new table sys line
	//___________________________________________	
	app.post('/tablesys', (request, response) => {
		pool.query('INSERT INTO table_sys  SET ?', request.body,
		(error, result) => {
		     console.log("req==",request.body)
			if (error) throw error
			response.status(201).send(`${result.insertId}`)
		})	
	}),
	//___________________________________________
	//  get count of all calls
	//___________________________________________
	app.get('/callfull', (request, response) => {
 
		pool.query('SELECT COUNT(*) as total FROM invocation', (error, result) => {
			if (error) throw error
 
			response.send(result)
		})
	}),
	//____________________________________________
	// get all from frombase (param) by driver id (param)
	//____________________________________________
	app.get('/getallbyuser/:frombase/:id', (request, response) => {
	
		const frombase = request.params.frombase 
		const id = request.params.id
		pool.query('SELECT * FROM ? WHERE id_driver = ?', frombase, id, (error, result) => {
			if (error) throw error
		response.send(result)
		})
	}),
	//____________________________________________
	// get driver by id
	//____________________________________________
	app.get('/drivers/:id', (request, response) => {
		const id = request.params.id
		
		pool.query('SELECT * FROM drivers WHERE id_driver = ?', id, (error, result) => {
			if (error) throw error
 
			response.send(result)
		})
	}),
	//________________________________________________
	//  delete driver by id - set dr_del==1
	//________________________________________________
	app.put('/drivers/:id', (request, response) => {
		const id = request.params.id;
		console.log("in del driver==",id)
		pool.query('UPDATE drivers SET dr_del = 1 WHERE id = ?',  id, (error, result) => {	
///		pool.query('DELETE FROM drivers WHERE id = ?', id, (error, result) => {
			if (error) throw error;
 
			response.send('driver deleted.');
		})
	}),
	
	//___________________________________________
	// Add a new user
	//___________________________________________
	app.post('/users', (request, response) => {
	
		pool.query('INSERT INTO user SET ?', request.body, (error, result) => {
		    // console.log("req==",request.body)
		
			if (error) throw error
	
			response.status(201).send(`${result.insertId}`)
		})
	}),
	//____________________________________________
	//  update user by id
	//____________________________________________
	app.put('/users/:id', (request, response) => {
		const id = request.params.id;
 
		pool.query('UPDATE user SET ? WHERE id_user = ?', [request.body, id], (error, result) => {
			if (error) throw error;
 
			response.send('User updated successfully.');
		});
	}),
	//________________________________________________
	//  delete user by id
	//________________________________________________
	app.delete('/users/:id', (request, response) => {
		const id = request.params.id;
 
		pool.query('DELETE FROM user WHERE id_user = ?', id, (error, result) => {
			if (error) throw error;
 
			response.send('User deleted.');
		})
	})
}

module.exports = router