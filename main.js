//Task 2 
const container = document.getElementById('container');
const processingMessage = document.getElementById('processing');

async function fetchTickets() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('No response');
        }
        const tickets = await response.json();
        if (tickets.length === 0) {
            throw new Error('No tickets are found');
        }
        displayTickets(tickets);
    } catch (error) {
        container.innerHTML = `<p>Error: ${error.message}</p>`;
        
        // Task 4 Use finally to Ensure Cleanup
    }finally {
        processingMessage.style.display = 'ensurrig cleanup';
    }
}


    


// Task 3 
function displayTickets(tickets) {
    tickets.forEach(ticket => {
        const ticketElement = document.createElement('div');
        ticketElement.innerHTML = `
            <p>Customer Name: ${ticket.userId}</p>
            <p>Issue Description: ${ticket.title}</p>
            <p>Details: ${ticket.body}</p>
            <hr>
        `;
        container.appendChild(ticketElement);
    });
}
// Calling the function to fetch ticket details
fetchTickets();


