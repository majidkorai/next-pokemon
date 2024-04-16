
## Pokemon Next

Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The project contains three views.

## List Pokemon Types

This is first and default view. It fetches and displays 20 Pokemon Types / Categories. We could implement the pagination to show more, but that was out of scope for this project. 

This screen also provides a dropdown list of Pokemons. When user selects a Pokemon from the dropdown list, The types will be filtered to show only to which that Pokemon belongs to. 

Each Pokemon Type is clickable and User can click to list all the Pokemons of that type.

Screenshot for Pokemon Types view.
<img width="1787" alt="Screenshot 2024-04-16 at 6 11 56 PM" src="https://github.com/majidkorai/next-pokemon/assets/1949155/14d488ae-f018-4876-8b45-4ccbb6d83b42">

## List Pokemons by Pokemon Type

This view shows all the Pokemons having selected type. User can navigate to this by clicking link from Pokemon Types view. 

This view also have a search functionality to search Pokemons by name. 

Screenshot for Pokemons by type.
<img width="1787" alt="Screenshot 2024-04-16 at 6 12 28 PM" src="https://github.com/majidkorai/next-pokemon/assets/1949155/b568bafe-3de5-41c5-bd77-9da397409357">

## Pokemon Details

This view displays some details about a selected Pokemon from the Pokemon List. It also displays a bar chart displaying the stats for a pokemon. (It uses React-Charts library)

Screenshot for Pokemon Details
<img width="1786" alt="Screenshot 2024-04-16 at 6 12 41 PM" src="https://github.com/majidkorai/next-pokemon/assets/1949155/f07d5317-8513-4bdb-a3be-a5b7aa9a5d67">

## Tech Stack and Directory Structure
Project is built using `Next.js` v14 with Typescript. Though it doesn't use SSR capabilities of Next.js. For state management it uses `React Query`. Navigation is done using `App Router` of Next.js. Project displays Pokemon Stats in a bar chart which uses `React Charts` library. Also I have used `lodash` utilities in some views.

Directory structure is nothing fancy, just typical Next.js directory structure. Next.js Pages are directly in `app` folder, alongwith two other directories. `lib` directory contains helpers / utils files e.g. types and data fetching utils. `ui` directory contains all the react components used in the project. 

##Problems / Flaws
There are some issues with the project. First one is that I couldn't get spare much time to add tests. 2nd is the performance issue. On the Pokemon Types view for example, we are loading Pokemon data from `pokeapi` to fill the dropdown, the api that lists the pokemon doesn't give enough information. It only retrieves the name of the pokemon and url to fetch details. So we are fetching the details also by making api calls for each pokemon to fetch the details. This makes several calls together to fetch the data and UI shows loading. I think the optimal way to solve this issue was to use graphQl. By using graphQl we could fetch all the required data in one single call. 
