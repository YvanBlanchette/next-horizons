const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//! Fetch all properties from our API
async function fetchProperties() {
  try {
    // Check if the API domain is available
    if (!apiDomain) {
      console.log('API domain is not available');
      return [];
    }


    // Fetch the data
    const response = await fetch(`${apiDomain}/properties`);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    // Return the data
    return response.json();

    // Catch any errors and log them to the console
  } catch (error) {
    console.log(error);
    console.log("Domaine de l'API indisponible...");
    return [];
  }
}



//! Fect single property from our API
async function fetchProperty(id) {
  try {
    // Check if the API domain is available
    if (!apiDomain) {
      console.log("Domaine de l'API indisponible...");
      return null;
    }


    // Fetch the data
    const response = await fetch(`${apiDomain}/properties/${id}`);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Échec de récupération des données...');
    }
    // Return the data
    return response.json();

    // Catch any errors and log them to the console
  } catch (error) {
    console.log(error);
    console.log("Domaine de l'API indisponible...");
    return null;
  }
}


export { fetchProperties, fetchProperty };