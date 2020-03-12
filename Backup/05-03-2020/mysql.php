<?php
error_reporting(E_ERROR | E_PARSE);

// header('Access-Control-Allow-Origin: *');
// header("Content-type:multipart/form-data");
// header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-  Disposition, Content-Description');
// header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// $con = mysqli_connect("localhost", "id11152019_bhuminarrowfab", "bhuminarrowfab", "id11152019_bhuminarrowfab");
$con = mysqli_connect("localhost", "u149947270_bnf", "8460224419", "u149947270_bnf");

if (isset($_REQUEST['callapi'])) {

	$process = $_REQUEST['process'];

	if ($process == "addUser") {
		addUser($_REQUEST, $con);
	} else if ($process == "checkUser") {
		checkUser($_REQUEST, $con);
	} else if ($process == "getUser") {
		getUser($_REQUEST, $con);
	} else if ($process == "updateUser") {
		updateUser($_REQUEST, $con);
	} else if ($process == "getMaterials") {
		getMaterials($_REQUEST, $con);
	} else if ($process == "getLatestMaterials") {
		getLatestMaterials($_REQUEST, $con);
	} else if ($process == "saveOrder") {
		saveOrder($_REQUEST, $con);
	} else if ($process == "getOrders") {
		getOrders($_REQUEST, $con);
	} else if ($process == "getOrderByID") {
		getOrderByID($_REQUEST, $con);
	} else if ($process == "getTotalOrders") {
		getTotalOrders($_REQUEST, $con);
	} else if ($process == "uploadMaterial") {
		uploadMaterial($_REQUEST, $_FILES, $con);
	} else if ($process == "getAdminAllTotal") {
		getAdminAllTotal($_REQUEST, $con);
	} else if ($process == "getMaterialByID") {
		getMaterialByID($_REQUEST, $con);
	} else if ($process == "updateMaterial") {
		updateMaterial($_REQUEST, $_FILES, $con);
	} else if ($process == "updateMaterialDetailOnly") {
		updateMaterialDetailOnly($_REQUEST, $con);
	} else if ($process == "deleteMaterial") {
		deleteMaterial($_REQUEST, $con);
	} else if ($process == "getUsers") {
		getUsers($_REQUEST, $con);
	} else if ($process == "updateOrderStatus") {
		updateOrderStatus($_REQUEST, $con);
	} else if ($process == "getAllOrders") {
		getAllOrders($_REQUEST, $con);
	} else if ($process == "blockUnblockUser") {
		blockUnblockUser($_REQUEST, $con);
	} else if ($process == "checkUserStatus") {
		checkUserStatus($_REQUEST, $con);
	} else if ($process == "checkUserProfileStatus") {
		checkUserProfileStatus($_REQUEST, $con);
	} else if ($process == "getNews") {
		getNews($_REQUEST, $con);
	} else if ($process == "addOrder") {
		addOrder($_REQUEST, $_FILES, $con);
	} else if ($process == "getAllWhatsappOrders") {
		getAllWhatsappOrders($_REQUEST, $con);
	} else if ($process == "getWhatsappOrderByID") {
		getWhatsappOrderByID($_REQUEST, $con);
	} else if ($process == "updateWhatsappOrderStatus") {
		updateWhatsappOrderStatus($_REQUEST, $con);
	} else if ($process == "getLatestVersion") {
		getLatestVersion($_REQUEST, $con);
	} else if ($process == "sendSNS") {
		sendSNS($con);
	} else if ($process == "saveRegistrationID") {
		saveRegistrationID($_REQUEST, $con);
	}
}

function addUser($data, $con) {
	$mobile = $data['mobile'];
	$name = isset($data['name']) ? $data['name'] : "";
	$address = isset($data['address']) ? $data['address'] : "";
	$gst = isset($data['gst']) ? $data['gst'] : "";

	$sql = "INSERT INTO users (mobile, name, address, gst) VALUES ('$mobile', '$name', '$address', '$gst')";

	if (mysqli_query($con, $sql)) {
		$id = mysqli_insert_id($con);
		
		$result = array(
			'success' => 1,
			'message' => "User created successfully!!!",
			'id' => $id,
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Something went wrong! Please try again later."
		);
	}

	echo json_encode($result);
	exit;
}

function checkUser($data, $con) {
	$mobile = $data['mobile'];

	$sql = "SELECT id, name FROM users WHERE mobile='$mobile'";
	$result = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$result = array(
				'success' => 1,
				'message' => "User already available.",
				'id' => $row['id'],
				'name' => $row['name'],
			);
		}
	} else {
		$result = array(
			'success' => 0,
			'message' => "User not available",
		);
	}

	echo json_encode($result);
	exit;
}

function getUser($data, $con) {
	$value = $data['value'];
	$type = $data['type'];

	$sql = "SELECT * FROM users WHERE $type=$value";
	$result = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$result = array(
				'success' => 1,
				'message' => "User found.",
				'id' => $row['id'],
				'mobile' => $row['mobile'],
				'name' => $row['name'],
				'address' => $row['address'],
				'gst' => $row['gst']
			);
		}
	} else {
		$result = array(
			'success' => 0,
			'message' => "User not found",
		);
	}

	echo json_encode($result);
	exit;
}

function updateUser($data, $con) {
	$mobile = $data['mobile'];
	$name = $data['name'];
	$gst = $data['gst'];
	$address = $data['address'];

	$sql = " UPDATE users SET name='$name', gst='$gst', address='$address', profile_status=1 WHERE mobile='$mobile' ";

	if (mysqli_query($con, $sql)) {
		$result = array(
			'success' => 1,
			'message' => "Data saved."
		);
	 } else {
		$result = array(
			'success' => 0,
			'message' => "Something went wrong! Please try again later."
		);
	 }

	echo json_encode($result);
	exit;
}

function getMaterials($data, $con) {
	$results = $data['results'];
	$page = $data['page'];
	$materials = array();
	$search = $data['searchKey'];
	$sortby = $data['sortby'];
	$owner = $data['owner'];
	$offset = ($page - 1) * $results;

	$searchQry = "";
	$sortQry = "";
	$searchOwnerQry = "";

	if ($owner != "All") {
		$searchOwnerQry = " AND company='$owner' ";
	}

	if ($search != "") {
		$searchQry = " AND material_id LIKE '%$search%' OR name LIKE '%$search%' OR price LIKE '%$search%' OR color LIKE '%$search%' ";
	}

	if ($sortby != "") {
		if ($sortby == "phl") {
			$sortQry = " ORDER BY sort_price DESC ";
		} else if ($sortby == "plh") {
			$sortQry = " ORDER BY sort_price ASC ";
		} else if ($sortby == "caz") {
			$sortQry = " ORDER BY color ASC ";
		} else if ($sortby == "cza") {
			$sortQry = " ORDER BY color DESC ";
		}
	} else {
		$sortQry = " ORDER BY id DESC ";
	}

	$limitQry = " LIMIT $results OFFSET $offset ";

	$sqlCount = "SELECT id as COUNT FROM materials WHERE 1 AND status=1 $searchQry $searchOwnerQry ";
	$resultCount = mysqli_query($con, $sqlCount);
	$totalCount = mysqli_num_rows($resultCount);

	$sql = "SELECT * FROM materials WHERE 1 AND status=1 $searchQry $searchOwnerQry $sortQry $limitQry ";
	$result = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$materials[] = $row;
		}
		$result = array(
			'success' => 1,
			'message' => "Materials Found.",
			'materials' => $materials,
			'total' => $totalCount
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Materials Not Found.",
		);
	}

	echo json_encode($result);
	exit;
}

function getLatestMaterials($data, $con) {
	$results = $data['results'];
	$lastid = $data['lastid'];
	$materials = array();

	$limitQry = " LIMIT $results OFFSET $lastid ";

	$sql = "SELECT * FROM materials WHERE 1 AND status=1 ORDER BY id DESC $limitQry ";
	$result = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$materials[] = $row;
		}
		$result = array(
			'success' => 1,
			'message' => "Materials Found.",
			'materials' => $materials
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Materials Not Found.",
		);
	}

	echo json_encode($result);
	exit;
}

function saveOrder($data, $con) {
	$userid = $data['userid'];
	$usermobile = $data['usermobile'];
	$materialprimaryid = $data['materialprimaryid'];
	$materialquantity = $data['materialquantity'];
	$matsample = $data['matsample'];
	$materialprice = $data['materialprice'];
	$date = $data['orderdate'];
	$piece = $data['piece'];

	$digits = 12;
	$orderid = str_pad(rand(0, pow(10, $digits)-1), $digits, '0', STR_PAD_LEFT);

	$sql = "INSERT INTO orders (user_id, order_id, mobile, material_id, quantity, price, sample, piece, status, created_at) VALUES ($userid, '$orderid', '$usermobile', $materialprimaryid, $materialquantity, '$materialprice', $piece, $matsample, 0, '$date')";

	if (mysqli_query($con, $sql)) {
		$result = array(
			'success' => 1,
			'message' => "Order placed successfully!!!",
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Something went wrong! Please try again later."
		);
	}

	echo json_encode($result);
	exit;
}

function getOrders($data, $con) {
	$mobile = $data['mobile'];
	$results = $data['results'];
	$page = $data['page'];
	$search = isset($data['search']) ? $data['search'] : '';
	$orders = array();
	$search = $data['searchKey'];
	$searchstatus = $data['searchstatus'];
	$offset = ($page - 1) * $results;

	$searchQry = "";

	$searchstatusQry = "";

	if ($searchstatus == "All") {
		$searchstatusQry = "";
	} else if ($searchstatus == "Pending") {
		$searchstatusQry = " AND o.status=0 ";
	} else if ($searchstatus == "Confirmed") {
		$searchstatusQry = " AND o.status=1 ";
	} else if ($searchstatus == "Delivered") {
		$searchstatusQry = " AND o.status=2 ";
	} else if ($searchstatus == "Rejected") {
		$searchstatusQry = " AND o.status=3 ";
	}

	if ($search != "") {
		$searchQry = " AND order_id LIKE '%$search%' ";
	}

	$limitQry = " LIMIT $results OFFSET $offset ";

	$sqlCount = "SELECT id as COUNT FROM orders WHERE 1 AND mobile='$mobile' $searchQry $searchstatusQry ";
	$resultCount = mysqli_query($con, $sqlCount);
	$totalCount = mysqli_num_rows($resultCount);

	$sql = "SELECT o.*, m.*, u.address, u.name as username, o.status as orderstatus, o.price as originalprice FROM orders o INNER JOIN materials m ON o.material_id = m.id INNER JOIN users u ON o.mobile = u.mobile WHERE 1 AND o.mobile='$mobile' $searchQry $searchstatusQry ORDER BY o.id DESC $limitQry ";
	
	$result = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			if ($row['orderstatus'] == "0") {
				$row['status'] = "Pending";
				$row['color'] = "secondary";
				$row['icon'] = "warning";
			} else if ($row['orderstatus'] == "1") {
				$row['status'] = "Confirmed";
				$row['color'] = "warning";
				$row['icon'] = "checkmark-circle";
			} else if ($row['orderstatus'] == "2") {
				$row['status'] = "Delivered";
				$row['color'] = "success";
				$row['icon'] = "done-all";
			} else if ($row['orderstatus'] == "3") {
				$row['status'] = "Rejected";
				$row['color'] = "danger";
				$row['icon'] = "alert";
			}
			$row['sample'] = ($row['sample']) ? 'Yes' : 'No';
			$row['created_at'] = date('d-m-Y h:i A', strtotime($row['created_at']));
			$explodeprice = explode("/", $row['originalprice']);
			$unitprice = $explodeprice[0];
			$explodeunit = explode("M", $explodeprice[1]);
			$unit = $explodeunit[0];
			$row['totalprice'] = round(($row['quantity'] * $unitprice) / $unit);
			$row['quantity'] = $row['quantity'] . 'M';
			$orders[] = $row;
		}
		$result = array(
			'success' => 1,
			'message' => "Orders Found.",
			'orders' => $orders,
			'total' => $totalCount
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Orders Not Found.",
		);
	}

	echo json_encode($result);
	exit;
}

function getOrderByID($data, $con) {
	$orderid = $data['orderid'];
	$order = array();

	$sql = "SELECT o.*, m.*, u.address, u.name as username, o.price as originalprice, o.status as orderstatus FROM orders o INNER JOIN materials m ON o.material_id = m.id INNER JOIN users u ON o.mobile = u.mobile WHERE 1 AND o.order_id='$orderid' ";
	
	$result = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			if ($row['orderstatus'] == "0") {
				$row['status'] = "Pending";
				$row['color'] = "secondary";
				$row['icon'] = "warning";
			} else if ($row['orderstatus'] == "1") {
				$row['status'] = "Confirmed";
				$row['color'] = "warning";
				$row['icon'] = "checkmark-circle";
			} else if ($row['orderstatus'] == "2") {
				$row['status'] = "Delivered";
				$row['color'] = "success";
				$row['icon'] = "done-all";
			} else if ($row['orderstatus'] == "3") {
				$row['status'] = "Rejected";
				$row['color'] = "danger";
				$row['icon'] = "alert";
			}
			$row['sample'] = ($row['sample']) ? 'Yes' : 'No';
			$row['created_at'] = date('d-m-Y h:i A', strtotime($row['created_at']));
			$explodeprice = explode("/", $row['originalprice']);
			$unitprice = $explodeprice[0];
			$explodeunit = explode("M", $explodeprice[1]);
			$unit = $explodeunit[0];
			$row['totalprice'] = round(($row['quantity'] * $unitprice) / $unit);
			$row['quantity'] = $row['quantity'] . 'M';
			$order[] = $row;
		}
		$result = array(
			'success' => 1,
			'message' => "Order Found.",
			'order' => $order,
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Order Not Found.",
		);
	}

	echo json_encode($result);
	exit;
}

function getTotalOrders($data, $con) {
	$mobile = $data['mobile'];

	$sqlCount = "SELECT id as COUNT FROM orders WHERE 1 AND mobile='$mobile' ";
	$resultCount = mysqli_query($con, $sqlCount);
	$totalCount = mysqli_num_rows($resultCount);

	if ($totalCount > 0) {
		$result = array(
			'success' => 1,
			'total' => $totalCount,
		);
	} else {
		$result = array(
			'success' => 1,
			'total' => 0,
		);
	}

	echo json_encode($result);
	exit;
}

function uploadMaterial($data, $filedata, $con) {
	$name = $data['name'];
	$mid = $data['mid'];
	$color = $data['color'];
	$price = $data['price'] . 'M';
	$mowner = $data['mowner'];
	$img = basename($filedata['photo']['name']);

	$target_path = "images/materials/" . $img;
	$explodetotalprice = explode("/", $price);
	$sort_price = $explodetotalprice[0];

	if (move_uploaded_file($filedata['photo']['tmp_name'], $target_path)) {
		$sql = "INSERT INTO materials (image, name, price, sort_price, material_id, color, company) VALUES ('$img', '$name', '$price', $sort_price, '$mid', '$color', '$mowner')";
		if (mysqli_query($con, $sql)) {
			// sendNotification();
			sendSNS($con);
			$result = array(
				'success' => 1,
				'message' => "Material uploaded successfully!!!",
			);
		} else {
			$result = array(
				'success' => 0,
				'message' => "Something went wrong! Please try again later."
			);
		}
	} else {
		$result = array(
			'success' => 0,
			'message' => "Image upload failed!",
		);
	}
	echo json_encode($result);
	exit;
}

function getAdminAllTotal($data, $con) {
	$sqlCountOrders = "SELECT id as COUNT FROM orders WHERE 1 ";
	$resultCountOrders = mysqli_query($con, $sqlCountOrders);
	$totalCountOrders = mysqli_num_rows($resultCountOrders);

	$sqlCountWhatsappOrders = "SELECT id as COUNT FROM whatsapp_orders WHERE 1 ";
	$resultCountWhatsappOrders = mysqli_query($con, $sqlCountWhatsappOrders);
	$totalCountWhatsappOrders = mysqli_num_rows($resultCountWhatsappOrders);

	$sqlCountMaterials = "SELECT id as COUNT FROM materials WHERE 1 AND status=1 ";
	$resultCountMaterials = mysqli_query($con, $sqlCountMaterials);
	$totalCountMaterials = mysqli_num_rows($resultCountMaterials);

	$sqlCountUsers = "SELECT id as COUNT FROM users WHERE 1 ";
	$resultCountUsers = mysqli_query($con, $sqlCountUsers);
	$totalCountUsers = mysqli_num_rows($resultCountUsers);

	$result = array(
		'success' => 1,
		'totalOrders' => $totalCountOrders,
		'totalWhatsappOrders' => $totalCountWhatsappOrders,
		'totalMaterials' => $totalCountMaterials,
		'totalUsers' => $totalCountUsers,
	);

	echo json_encode($result);
	exit;
}

function getMaterialByID($data, $con) {
	$materialid = $data['materialid'];
	$material = array();

	$sql = "SELECT * FROM materials WHERE 1 AND status=1 AND id=$materialid ";
	
	$result = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$material[] = $row;
		}
		$result = array(
			'success' => 1,
			'message' => "Material Found.",
			'material' => $material,
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Material Not Found.",
		);
	}

	echo json_encode($result);
	exit;
}

function updateMaterial($data, $filedata, $con) {
	$id = $data['id'];
	$name = $data['name'];
	$mid = $data['mid'];
	$color = $data['color'];
	$price = $data['price'] . 'M';
	$mowner = $data['mowner'];
	$img = basename($filedata['photo']['name']);

	$target_path = "images/materials/" . $img;

	$explodetotalprice = explode("/", $price);
	$sort_price = $explodetotalprice[0];

	if (move_uploaded_file($filedata['photo']['tmp_name'], $target_path)) {
		$sqldeleteimg = "SELECT image FROM materials WHERE id=$id ";
		$resultdeleteimg = mysqli_query($con, $sqldeleteimg);

		if (mysqli_num_rows($resultdeleteimg) > 0) {
			while($rowdelimg = mysqli_fetch_assoc($resultdeleteimg)) {
				if (file_exists("images/materials/" . $rowdelimg['image'])) {
					unlink("images/materials/" . $rowdelimg['image']);
				}
			}
		}

		$sql = " UPDATE materials set image='$img', name='$name', price='$price', sort_price='$sort_price', material_id='$mid', color='$color', company='$mowner' WHERE id=$id ";
		if (mysqli_query($con, $sql)) {
			$result = array(
				'success' => 1,
				'message' => "Material updated successfully!!!",
			);
		} else {
			$result = array(
				'success' => 0,
				'message' => "Something went wrong! Please try again later."
			);
		}
	} else {
		$result = array(
			'success' => 0,
			'message' => "Image update failed!",
		);
	}
	echo json_encode($result);
	exit;
}

function updateMaterialDetailOnly($data, $con) {
	$id = $data['id'];
	$name = $data['name'];
	$mid = $data['mid'];
	$color = $data['color'];
	$price = $data['price'] . 'M';
	$mowner = $data['mowner'];

	$explodetotalprice = explode("/", $price);
	$sort_price = $explodetotalprice[0];

	$sql = " UPDATE materials set name='$name', price='$price', sort_price='$sort_price', material_id='$mid', color='$color', company='$mowner' WHERE id=$id ";
	if (mysqli_query($con, $sql)) {
		$result = array(
			'success' => 1,
			'message' => "Material updated successfully!!!",
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Something went wrong! Please try again later."
		);
	}
	
	echo json_encode($result);
	exit;
}

function deleteMaterial($data, $con) {
	$id = $data['id'];

	$sql = " UPDATE materials SET status=0 WHERE id=$id ";
	if (mysqli_query($con, $sql)) {
		$result = array(
			'success' => 1,
			'message' => "Material deleted successfully!!!",
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Something went wrong! Please try again later."
		);
	}
	echo json_encode($result);
	exit;
}

function getUsers($data, $con) {
	$results = $data['results'];
	$page = $data['page'];
	$users = array();
	$search = $data['searchKey'];
	$offset = ($page - 1) * $results;

	$searchQry = "";

	if ($search != "") {
		$searchQry = " AND mobile LIKE '%$search%' OR name LIKE '%$search%' OR address LIKE '%$search%' OR gst LIKE '%$search%' ";
	}

	$limitQry = " LIMIT $results OFFSET $offset ";

	$sqlCount = "SELECT id as COUNT FROM users WHERE 1 $searchQry";
	$resultCount = mysqli_query($con, $sqlCount);
	$totalCount = mysqli_num_rows($resultCount);

	$sql = "SELECT * FROM users WHERE 1 $searchQry ORDER BY id DESC $limitQry ";
	$result = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$mobile = $row['mobile'];
			$sqlTotalOrder = "SELECT id as COUNT FROM orders WHERE mobile='$mobile' ";
			$resultTotalOrder = mysqli_query($con, $sqlTotalOrder);
			$totalOrder = mysqli_num_rows($resultTotalOrder);
			$row['totalOrder'] = $totalOrder;
			$users[] = $row;
		}
		$result = array(
			'success' => 1,
			'message' => "Users Found.",
			'users' => $users,
			'total' => $totalCount
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Users Not Found.",
		);
	}

	echo json_encode($result);
	exit;
}

function updateOrderStatus($data, $con) {
	$id = $data['id'];
	$status = $data['status'];

	$sql = " UPDATE orders set status=$status WHERE order_id='$id' ";
	if (mysqli_query($con, $sql)) {
		$result = array(
			'success' => 1,
			'message' => "Order status updated successfully!!!",
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Something went wrong! Please try again later."
		);
	}
	
	echo json_encode($result);
	exit;
}

function getAllOrders($data, $con) {
	$results = $data['results'];
	$page = $data['page'];
	$search = isset($data['search']) ? $data['search'] : '';
	$orders = array();
	$search = $data['searchKey'];
	$searchKeyDate = $data['searchKeyDate'];
	$searchstatus = $data['searchstatus'];
	$offset = ($page - 1) * $results;

	$searchQry = "";

	$searchDateQry = "";

	$searchstatusQry = "";

	if ($searchstatus == "All") {
		$searchstatusQry = "";
	} else if ($searchstatus == "Pending") {
		$searchstatusQry = " AND o.status=0 ";
	} else if ($searchstatus == "Confirmed") {
		$searchstatusQry = " AND o.status=1 ";
	} else if ($searchstatus == "Delivered") {
		$searchstatusQry = " AND o.status=2 ";
	} else if ($searchstatus == "Rejected") {
		$searchstatusQry = " AND o.status=3 ";
	}

	if ($search != "") {
		$searchQry = " AND order_id LIKE '%$search%' ";
	}

	if ($searchKeyDate != "") {
		$searchKeyDate = date('Y-m-d', strtotime($searchKeyDate));
		$searchDateQry = " AND created_at LIKE '%$searchKeyDate%' ";
	}

	$limitQry = " LIMIT $results OFFSET $offset ";

	$sqlCount = "SELECT id as COUNT FROM orders WHERE 1 $searchQry $searchDateQry $searchstatusQry ";
	$resultCount = mysqli_query($con, $sqlCount);
	$totalCount = mysqli_num_rows($resultCount);

	$sql = "SELECT o.*, m.*, u.address, u.name as username, o.status as orderstatus, o.price as originalprice FROM orders o INNER JOIN materials m ON o.material_id = m.id INNER JOIN users u ON o.mobile = u.mobile WHERE 1 $searchQry $searchDateQry $searchstatusQry ORDER BY o.id DESC $limitQry ";
	
	$result = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			if ($row['orderstatus'] == "0") {
				$row['status'] = "Pending";
				$row['color'] = "secondary";
				$row['icon'] = "warning";
			} else if ($row['orderstatus'] == "1") {
				$row['status'] = "Confirmed";
				$row['color'] = "warning";
				$row['icon'] = "checkmark-circle";
			} else if ($row['orderstatus'] == "2") {
				$row['status'] = "Delivered";
				$row['color'] = "success";
				$row['icon'] = "done-all";
			} else if ($row['orderstatus'] == "3") {
				$row['status'] = "Rejected";
				$row['color'] = "danger";
				$row['icon'] = "alert";
			}
			$row['sample'] = ($row['sample']) ? 'Yes' : 'No';
			$row['created_at'] = date('d-m-Y h:i A', strtotime($row['created_at']));
			$explodeprice = explode("/", $row['originalprice']);
			$unitprice = $explodeprice[0];
			$explodeunit = explode("M", $explodeprice[1]);
			$unit = $explodeunit[0];
			$row['totalprice'] = round(($row['quantity'] * $unitprice) / $unit);
			$row['quantity'] = $row['quantity'] . 'M';
			$orders[] = $row;
		}
		$result = array(
			'success' => 1,
			'message' => "Orders Found.",
			'orders' => $orders,
			'total' => $totalCount
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Orders Not Found.",
		);
	}

	echo json_encode($result);
	exit;
}

function blockUnblockUser($data, $con) {
	$mobile = $data['mobile'];
	$status = $data['status'];

	if ($status == 0) {
		$successMsg = "User blocked";
	} else if ($status == 1) {
		$successMsg = "User unblocked";
	}

	$sql = " UPDATE users set status=$status WHERE mobile='$mobile' ";
	if (mysqli_query($con, $sql)) {
		$result = array(
			'success' => 1,
			'message' => $successMsg,
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Something went wrong! Please try again later."
		);
	}
	
	echo json_encode($result);
	exit;
}

function checkUserStatus($data, $con) {
	$mobile = $data['mobile'];

	$sql = "SELECT status FROM users WHERE mobile='$mobile' ";
	
	$result = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$result = array(
				'success' => 1,
				'status' => $row['status']
			);
		}
	} else {
		$result = array(
			'success' => 0,
			'message' => "User Not Found.",
		);
	}

	echo json_encode($result);
	exit;
}

function checkUserProfileStatus($data, $con) {
	$mobile = $data['mobile'];

	$sql = "SELECT profile_status FROM users WHERE mobile='$mobile' ";
	
	$result = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$result = array(
				'success' => 1,
				'status' => $row['profile_status']
			);
		}
	} else {
		$result = array(
			'success' => 0,
			'message' => "User Not Found.",
		);
	}

	echo json_encode($result);
	exit;
}

function getNews($data, $con) {
	$news = array();

	$sql = "SELECT * FROM news WHERE 1 ORDER BY id DESC ";
	
	$result = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$news[] = $row;
		}
		$result = array(
			'success' => 1,
			'message' => "News Found.",
			'news' => $news
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "News Not Found.",
		);
	}

	echo json_encode($result);
	exit;
}

function addOrder($data, $filedata, $con) {
	$partyname = $data['partyname'];
	$partymobile = $data['partymobile'];
	$partyaddress = $data['partyaddress'];
	$quantity = $data['quantity'];
	$pieces = $data['pieces'];
	$sample = $data['sample'];
	$img = basename($filedata['photo']['name']);

	$target_path = "images/materials/" . $img;

	$digits = 12;
	$orderid = str_pad(rand(0, pow(10, $digits)-1), $digits, '0', STR_PAD_LEFT);

	if ($sample) {
		$sample = 1;
	} else {
		$sample = 0;
	}

	if (move_uploaded_file($filedata['photo']['tmp_name'], $target_path)) {
		$sql = "INSERT INTO whatsapp_orders (image, order_id, cust_name, cust_mobile, cust_address, quantity, piece, sample) VALUES ('$img', '$orderid', '$partyname', '$partymobile', '$partyaddress', $quantity, $pieces, $sample)";
		if (mysqli_query($con, $sql)) {
			$result = array(
				'success' => 1,
				'message' => "Order added successfully!!!",
			);
		} else {
			$result = array(
				'success' => 0,
				'message' => "Something went wrong! Please try again later."
			);
		}
	} else {
		$result = array(
			'success' => 0,
			'message' => "Image upload failed!",
		);
	}
	echo json_encode($result);
	exit;
}

function getAllWhatsappOrders($data, $con) {
	$results = $data['results'];
	$page = $data['page'];
	$search = isset($data['search']) ? $data['search'] : '';
	$orders = array();
	$search = $data['searchKey'];
	$searchKeyDate = $data['searchKeyDate'];
	$searchstatus = $data['searchstatus'];
	$offset = ($page - 1) * $results;

	$searchQry = "";

	$searchDateQry = "";

	$searchstatusQry = "";

	if ($searchstatus == "All") {
		$searchstatusQry = "";
	} else if ($searchstatus == "Pending") {
		$searchstatusQry = " AND o.status=0 ";
	} else if ($searchstatus == "Confirmed") {
		$searchstatusQry = " AND o.status=1 ";
	} else if ($searchstatus == "Delivered") {
		$searchstatusQry = " AND o.status=2 ";
	} else if ($searchstatus == "Rejected") {
		$searchstatusQry = " AND o.status=3 ";
	}

	if ($search != "") {
		$searchQry = " AND order_id LIKE '%$search%' ";
	}

	if ($searchKeyDate != "") {
		$searchKeyDate = date('Y-m-d', strtotime($searchKeyDate));
		$searchDateQry = " AND created_at LIKE '%$searchKeyDate%' ";
	}

	$limitQry = " LIMIT $results OFFSET $offset ";

	$sqlCount = "SELECT id as COUNT FROM whatsapp_orders WHERE 1 $searchQry $searchDateQry $searchstatusQry ";
	$resultCount = mysqli_query($con, $sqlCount);
	$totalCount = mysqli_num_rows($resultCount);

	$sql = "SELECT o.*, o.status as orderstatus FROM whatsapp_orders o WHERE 1 $searchQry $searchDateQry $searchstatusQry ORDER BY o.id DESC $limitQry ";
	
	$result = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			if ($row['orderstatus'] == "0") {
				$row['status'] = "Pending";
				$row['color'] = "secondary";
				$row['icon'] = "warning";
			} else if ($row['orderstatus'] == "1") {
				$row['status'] = "Confirmed";
				$row['color'] = "warning";
				$row['icon'] = "checkmark-circle";
			} else if ($row['orderstatus'] == "2") {
				$row['status'] = "Delivered";
				$row['color'] = "success";
				$row['icon'] = "done-all";
			} else if ($row['orderstatus'] == "3") {
				$row['status'] = "Rejected";
				$row['color'] = "danger";
				$row['icon'] = "alert";
			}
			$row['sample'] = ($row['sample']) ? 'Yes' : 'No';
			$row['created_at'] = date('d-m-Y h:i A', strtotime($row['created_at']));
			$row['quantity'] = $row['quantity'] . 'M';
			$orders[] = $row;
		}
		$result = array(
			'success' => 1,
			'message' => "Orders Found.",
			'orders' => $orders,
			'total' => $totalCount
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Orders Not Found.",
		);
	}

	echo json_encode($result);
	exit;
}

function getWhatsappOrderByID($data, $con) {
	$orderid = $data['orderid'];
	$order = array();

	$sql = "SELECT o.*, o.status as orderstatus FROM whatsapp_orders o WHERE 1 AND o.order_id='$orderid' ";
	
	$result = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			if ($row['orderstatus'] == "0") {
				$row['status'] = "Pending";
				$row['color'] = "secondary";
				$row['icon'] = "warning";
			} else if ($row['orderstatus'] == "1") {
				$row['status'] = "Confirmed";
				$row['color'] = "warning";
				$row['icon'] = "checkmark-circle";
			} else if ($row['orderstatus'] == "2") {
				$row['status'] = "Delivered";
				$row['color'] = "success";
				$row['icon'] = "done-all";
			} else if ($row['orderstatus'] == "3") {
				$row['status'] = "Rejected";
				$row['color'] = "danger";
				$row['icon'] = "alert";
			}
			$row['sample'] = ($row['sample']) ? 'Yes' : 'No';
			$row['created_at'] = date('d-m-Y h:i A', strtotime($row['created_at']));
			$row['quantity'] = $row['quantity'] . 'M';
			$order[] = $row;
		}
		$result = array(
			'success' => 1,
			'message' => "Order Found.",
			'order' => $order,
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Order Not Found.",
		);
	}

	echo json_encode($result);
	exit;
}

function updateWhatsappOrderStatus($data, $con) {
	$id = $data['id'];
	$status = $data['status'];

	$sql = " UPDATE whatsapp_orders set status=$status WHERE order_id='$id' ";
	if (mysqli_query($con, $sql)) {
		$result = array(
			'success' => 1,
			'message' => "Order status updated successfully!!!",
		);
	} else {
		$result = array(
			'success' => 0,
			'message' => "Something went wrong! Please try again later."
		);
	}
	
	echo json_encode($result);
	exit;
}

function getLatestVersion($data, $con) {
	$result = array(
		'success' => 1,
		'version' => 11,
	);
	echo json_encode($result);
	exit;
}

function sendNotification() {
    $content = array(
		// "en" => 'New material uploaded',
    );
    $fields = array(
        'app_id' => "a1711926-9bb5-45f3-8b9c-c491e036198d",
        'included_segments' => array(
            'All'
        ),
		// 'contents' => $content,
		'template_id' => 'c7ef7066-44af-49a7-b9f7-7de22e5016ee'
    );
    
    $fields = json_encode($fields);
    // print("\nJSON sent:\n");
    // print($fields);
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json; charset=utf-8',
        'Authorization: Basic ZDk3NmY1OGItNTM3OC00ZTEzLTg4YzQtYjFhYTA5ODk5MmVj'
    ));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_HEADER, FALSE);
    curl_setopt($ch, CURLOPT_POST, TRUE);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    
    $response = curl_exec($ch);
    curl_close($ch);
}

function sendSNS($con) {
	$sql = "SELECT * FROM notification_tokens WHERE 1 ";
	$result = mysqli_query($con, $sql);
	
	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$url = "https://fcm.googleapis.com/fcm/send";
			$token = $row['token'];
			$serverKey = 'AAAA0bITxxE:APA91bEOMU04JhzlHRXelr7aUmqU3YjwQBdvEW-vqCP_TmpUC2YMy9fsrHxMCMBXoi0F7yfvDIwIGo55A315gxu49IT_W1yyik4QhBRHhdeSnIKPzmM5Lm4WoIUUzg3R_BHmEnCh0aUR';
			$title = "New Material Uploaded";
			$body = "Hey, New material available. Please click here to see.";
			$notification = array('title' => $title , 'text' => $body, 'sound' => 'default', 'badge' => '1');
			$arrayToSend = array('to' => $token, 'notification' => $notification, 'priority'=>'high');
			$json = json_encode($arrayToSend);
			$headers = array();
			$headers[] = 'Content-Type: application/json';
			$headers[] = 'Authorization: key='. $serverKey;
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
			curl_setopt($ch, CURLOPT_URL, $url);
		
			curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
			curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
			curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
			//Send the request
			$response = curl_exec($ch);
			//Close request
			if ($response === FALSE) {
				die('FCM Send Error: ' . curl_error($ch));
			}
			curl_close($ch);
		}
	}
}

function saveRegistrationID($data, $con) {
	$registrationId = base64_decode($data['registrationId']);

	$sql = "SELECT id FROM notification_tokens WHERE token='$registrationId' ";
	$result = mysqli_query($con, $sql);

	if (mysqli_num_rows($result) > 0) {
		$result = array(
			'success' => 1,
			'message' => "Token added"
		);
	} else {
		$sqlInsert = "INSERT INTO notification_tokens (token) VALUES ('$registrationId')";

		if (mysqli_query($con, $sqlInsert)) {			
			$result = array(
				'success' => 1,
				'message' => "Token added"
			);
		} else {
			$result = array(
				'success' => 0,
				'message' => "Something went wrong! Please try again later."
			);
		}
	}

	echo json_encode($result);
	exit;
}