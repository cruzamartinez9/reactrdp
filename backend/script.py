import subprocess
import sys

# Get the arguments passed from Node.js
email = sys.argv[1]
secret_key = sys.argv[2]
password = sys.argv[3]

# Define the 1Password command with the necessary flags
command = [
    'op', 'account', 'add',
    '--address', 'mutuallyhuman.1password.com',
    '--email', email,
    '--secret-key', secret_key
]

# Execute the 1Password command and enter the password when prompted
try:
    process = subprocess.Popen(command, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

    # Provide the password when prompted
    process.stdin.write(f'{password}\n')
    process.stdin.flush()

    # Wait for the process to finish and capture the output
    output, error = process.communicate()

    print("Process Output:\n", output)
    if error:
        print("Process Error:\n", error)

except Exception as e:
    print(f"An error occurred: {e}")