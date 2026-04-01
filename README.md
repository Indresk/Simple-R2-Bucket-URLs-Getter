# Simple R2 Bucket URLs Getter
This is a simple script that retrieves the URLs of all objects (no empty folders) in a specified R2 bucket and saves them to a JSON. The script uses the Cloudflare API to access the R2 bucket and requires an API credentials and that API needs to have appropriate read permissions.

## Prerequisites
- NodeJS 18+
- A Cloudflare account with an R2 bucket

## Installation
1. Clone the repository:
   ```bash
   git clone
    ```
2. Navigate to the project directory:
   ```bash 
    cd simple-r2-bucket-urls-getter
    ```
3. Install the dependencies:
    ```bash
     npm install
     ```

## Usage
1. Create a `.env` file in the root of the project and add your Cloudflare information as the ".env.example" file.
2. Run the script:
   ```bash
   npm start
   ```
3. All the URLs of the objects in the specified R2 bucket will be saved by default in the `saveFiles` folder under project directory with the following name`{current_date}.json`.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.
