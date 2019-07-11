var C1 = []
var C2 = []
var C3 = []
var script = ["Message 1", "Message 2", "Message 3", "Message 4", "Message 5", "Message 6", "Message 7"]
var hint_count = 2
var timestamp = 0
var message_number_C1 = 0
var message_number_C2 = 0
var message_number_C3 = 0
var original_cooldown = []

// Class definition for a Node. In Javascript, this is how we define blueprints of objects (class), as functions!
function Node(node_id) {
	var node = document.createElement("BUTTON")
	
	node.setAttribute("id", node_id)
	
	var node_text = document.createTextNode(node_id)
	
	node.appendChild(node_text)
	
	document.body.appendChild(node)
	
	node.message = '' // default message.

	node.cooldown = 0

}

function cansend(node) {
	if (node.cooldown == 0 && node.message != '')
		return true
	else
		return false
}

function canreceive(node) {
	if (node.message == '')
		return true
	else
		return false
}

function send(node, next_node){
	
	if (level.options[level.selectedIndex].value == "PlainText"){
		receive(next_node, node.message)
		node.message = ''
	}
	else{
		node.message = genRndString()
		next_node.message = genRndString()
	} // If professor want's the encrypted messages to flow like the plaintext version, then remove the else condition. Else, let it be and so, whenever a send action takes place, both nodes have new messages.
	
	if (node.id == '1')
		node.cooldown = original_cooldown[0]
	else if (node.id == '2')
		node.cooldown = original_cooldown[1]
	else if (node.id == '3')
		node.cooldown = original_cooldown[2]
	else if (node.id == '4')
		node.cooldown = original_cooldown[3]
	else if (node.id == '5')
		node.cooldown = original_cooldown[4]
	else if (node.id == '6')
		node.cooldown = original_cooldown[5]
	else if (node.id == '7')
		node.cooldown = original_cooldown[6]
	else if (node.id == '8')
		node.cooldown = original_cooldown[7]
	else if (node.id == '9')
		node.cooldown = original_cooldown[8]
	else if (node.id == 'A')
		node.cooldown = original_cooldown[9]
	else if (node.id == 'B')
		node.cooldown = original_cooldown[10]
	else if (node.id == 'C')
		node.cooldown = original_cooldown[11]

}

function receive(node,received_message) {
	node.message = received_message
}

// This is how a new object is instantiated.
var one = new Node('1')
var two = new Node('2')
var three = new Node('3')
var four = new Node('4')
var five = new Node('5')
var six = new Node('6')
var seven = new Node('7')
var eight = new Node('8')
var nine = new Node('9')
var A = new Node('A')
var B = new Node('B')
var C = new Node('C')
var X = new Node('X')
var Y = new Node('Y')
var Z = new Node('Z')

// The server nodes don't need to reset their cooldowns because they are never decreased.
document.getElementById('X').cooldown = getRndInteger(5,1)
document.getElementById('Y').cooldown = getRndInteger(5,1)
document.getElementById('Z').cooldown = getRndInteger(5,1)

var Node1_timeout
var list1 = document.getElementById('Node1')
var prev_state_N1 = list1.options[list1.selectedIndex].value
var curr_state_N1
/*
var pA = document.getElementById('A').message
var pB = document.getElementById('B').message
var pC = document.getElementById('C').message
var cA
var cB
var cC*/
function Log_Node1(){
	curr_state_N1 = list1.options[list1.selectedIndex].value
	if (curr_state_N1 != prev_state_N1){
		document.getElementById('TA1').innerHTML = ""
		clearTimeout(Node1_timeout)
		prev_state_N1 = curr_state_N1
	}
	if (document.getElementById(curr_state_N1).message == '')
		document.getElementById('TA1').innerHTML += '...' + '\n'
	else
		document.getElementById('TA1').innerHTML += document.getElementById(curr_state_N1).message + '\n'
	
	Node1_timeout = setTimeout(Log_Node1,2000)
}

var Node2_timeout
var list2 = document.getElementById('Node2')
var prev_state_N2 = list2.options[list2.selectedIndex].value
var curr_state_N2
function Log_Node2(){
	curr_state_N2 = list2.options[list2.selectedIndex].value
	if (curr_state_N2 != prev_state_N2){
		document.getElementById('TA2').innerHTML = ""
		clearTimeout(Node2_timeout)
		prev_state_N2 = curr_state_N2
	}
	if (document.getElementById(curr_state_N2).message == '')
		document.getElementById('TA2').innerHTML += '...' + '\n'
	else
		document.getElementById('TA2').innerHTML += document.getElementById(curr_state_N2).message + '\n'
	Node2_timeout = setTimeout(Log_Node2,2000)
}

function getRndInteger(max,min) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function genRndString() {
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var numbers = "0123456789"
	var punctuation = "!@#$%^&*()_+="
	return letters[getRndInteger(25,0)] + numbers[getRndInteger(9,0)] + punctuation[getRndInteger(12,0)] + letters[getRndInteger(25,0)] + punctuation[getRndInteger(12,0)]
}

function generate_circuits() {

	// Generating the circuit for client A.
	C1[0] = 'A'
	C1[1] = String(getRndInteger(3,1))
	C1[2] = String(getRndInteger(6,4))
	C1[3] = String(getRndInteger(9,7))
	var end_node = String(getRndInteger(3,1))
	if (end_node == 1)
		C1[4] = 'X'
	else if (end_node == 2)
		C1[4] = 'Y'
	else
		C1[4] = 'Z'	
	
	// Generating the circuit for client B.
	var temp
	C2[0] = 'B'
	while (true){
		temp = String(getRndInteger(3,1))
		if (!C1.includes(temp)){
			C2[1] = temp
			break
		}
	}

	while (true){
		temp = String(getRndInteger(6,4))
		if (!C1.includes(temp)){
			C2[2] = temp
			break
		}
	}

	while (true){
		temp = String(getRndInteger(9,7))
		if (!C1.includes(temp)){
			C2[3] = temp
			break
		}
	}

	while (true){
		temp = String(getRndInteger(3,1))
		if (temp == '1')
			temp = 'X'
		else if(temp == '2')
			temp = 'Y'
		else
			temp = 'Z'
		if (!C1.includes(temp)){
			C2[4] = temp
			break
		}
	}

	// Generating the circuit for client C.
	var temp
	C3[0] = 'C'
	while (true){
		temp = String(getRndInteger(3,1))
		if (!C1.includes(temp) && !C2.includes(temp)){
			C3[1] = temp
			break
		}
	}

	while (true){
		temp = String(getRndInteger(6,4))
		if (!C1.includes(temp) && !C2.includes(temp)){
			C3[2] = temp
			break
		}
	}

	while (true){
		temp = String(getRndInteger(9,7))
		if (!C1.includes(temp) && !C2.includes(temp)){
			C3[3] = temp
			break
		}
	}

	while (true){
		temp = String(getRndInteger(3,1))
		if (temp == '1')
			temp = 'X'
		else if(temp == '2')
			temp = 'Y'
		else
			temp = 'Z'
		if (!C1.includes(temp) && !C2.includes(temp)){
			C3[4] = temp
			break
		}
	}

	// Populating the original countdowns here.
	for(var i = 0; i < 12; i++)
		original_cooldown[i] = getRndInteger(5,1)

	alert("TOR Circuits Setup! Good Luck!")
}

// This function just moves the message along the circuit. 
var simulation_timer
var level = document.getElementById('Diff')
function start_sim() {
	if (level.options[level.selectedIndex].value == "PlainText"){
		if (timestamp == 0){
			document.getElementById(C1[0]).message = script[message_number_C1]
			document.getElementById(C2[0]).message = script[message_number_C2]
			document.getElementById(C3[0]).message = script[message_number_C3]
		}
		
		else{
			// Special check on the server nodes because they are the only nodes which don't 'send' messages. If this wasn't done, they would not be able to receive any more messages beyond the first one.
			if (timestamp % document.getElementById(C1[4]).cooldown == 0)
				document.getElementById(C1[4]).message = ''
			if (timestamp % document.getElementById(C2[4]).cooldown == 0)
				document.getElementById(C2[4]).message = ''
			if (timestamp % document.getElementById(C3[4]).cooldown == 0)
				document.getElementById(C3[4]).message = ''
		
			// At every timestamp mark, reduce cooldown by 1 for all nodes (except the server node since they don't 'send' messages) provided they are not 0.
			for(var i = 3; i >= 0; i--){
				if (document.getElementById(C1[i]).cooldown != 0)
					document.getElementById(C1[i]).cooldown--

				if (document.getElementById(C2[i]).cooldown != 0)
					document.getElementById(C2[i]).cooldown--

				if (document.getElementById(C3[i]).cooldown != 0)
					document.getElementById(C3[i]).cooldown--
			}

			// Cycle through all the nodes to see whether they can send or not, in reverse order because otherwise a node which just received a message could send to the next node in the same timestamp and this is not allowed.
			for(var i = 4; i > 0; i--){
				if (cansend(document.getElementById(C1[i-1])) && canreceive(document.getElementById(C1[i]))){
					send(document.getElementById(C1[i-1]),document.getElementById(C1[i]))
					if (i-1 == 0){
						message_number_C1++
						document.getElementById(C1[i-1]).message = script[message_number_C1 % 7]
					}
				}
			
				if (cansend(document.getElementById(C2[i-1])) && canreceive(document.getElementById(C2[i]))){
					send(document.getElementById(C2[i-1]),document.getElementById(C2[i]))
					if (i-1 == 0){
						message_number_C2++
						document.getElementById(C2[i-1]).message = script[message_number_C2 % 7]
					}
				}
			
				if (cansend(document.getElementById(C3[i-1])) && canreceive(document.getElementById(C3[i]))){
					send(document.getElementById(C3[i-1]),document.getElementById(C3[i]))
					if (i-1 == 0){
						message_number_C3++
						document.getElementById(C3[i-1]).message = script[message_number_C3 % 7]
					}
				}
			}
		}
	}
	else{
		if (timestamp == 0){
			document.getElementById(C1[0]).message = genRndString()
			document.getElementById(C2[0]).message = genRndString()
			document.getElementById(C3[0]).message = genRndString()
		}
		
		else{
			// Special check on the server nodes because they are the only nodes which don't 'send' messages. If this wasn't done, they would not be able to receive any more messages beyond the first one.
			if (timestamp % document.getElementById(C1[4]).cooldown == 0)
				document.getElementById(C1[4]).message = ''
			if (timestamp % document.getElementById(C2[4]).cooldown == 0)
				document.getElementById(C2[4]).message = ''
			if (timestamp % document.getElementById(C3[4]).cooldown == 0)
				document.getElementById(C3[4]).message = ''
		
			// At every timestamp mark, reduce cooldown by 1 for all nodes (except the server node since they don't 'send' messages) provided they are not 0.
			for(var i = 3; i >= 0; i--){
				if (document.getElementById(C1[i]).cooldown != 0)
					document.getElementById(C1[i]).cooldown--

				if (document.getElementById(C2[i]).cooldown != 0)
					document.getElementById(C2[i]).cooldown--

				if (document.getElementById(C3[i]).cooldown != 0)
					document.getElementById(C3[i]).cooldown--
			}

			// Cycle through all the nodes to see whether they can send or not, in reverse order because otherwise a node which just received a message could send to the next node in the same timestamp and this is not allowed.
			for(var i = 4; i > 0; i--){
				if (cansend(document.getElementById(C1[i-1])) && canreceive(document.getElementById(C1[i]))){
					send(document.getElementById(C1[i-1]),document.getElementById(C1[i]))
					if (i-1 == 0){
						message_number_C1++
						document.getElementById(C1[i-1]).message = genRndString()
					}
				}
			
				if (cansend(document.getElementById(C2[i-1])) && canreceive(document.getElementById(C2[i]))){
					send(document.getElementById(C2[i-1]),document.getElementById(C2[i]))
					if (i-1 == 0){
						message_number_C2++
						document.getElementById(C2[i-1]).message = genRndString()
					}
				}
			
				if (cansend(document.getElementById(C3[i-1])) && canreceive(document.getElementById(C3[i]))){
					send(document.getElementById(C3[i-1]),document.getElementById(C3[i]))
					if (i-1 == 0){
						message_number_C3++
						document.getElementById(C3[i-1]).message = genRndString()
					}
				}
			}
		}
	}
	

	timestamp++
	simulation_timer = setTimeout(start_sim,2000)
}

function stop_sim() {
	clearTimeout(simulation_timer)
	clearTimeout(Node1_timeout)
	clearTimeout(Node2_timeout)
}

function show_hints() {
	if (hint_count > 0) { 
		alert("You have " + hint_count + " hints remaining!")
		alert("Node " + C1[hint_count] + " lies on the circuit starting from client A!")
		hint_count--
	}
	else
		alert("You've run out of hints! Come on chum, you can do it!")
}

function test() {
	console.log(C1)
	console.log(C2)
	console.log(C3)
}