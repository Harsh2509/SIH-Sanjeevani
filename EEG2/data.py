import numpy as np
import pandas as pd

# Number of EEG channels and samples
num_eeg_channels = 33
num_eeg_samples = 1000

# Sampling rate
fs = 1000  # 1000 samples per second

# Generate synthetic EEG data
eeg_data = np.random.randn(num_eeg_channels, num_eeg_samples)  # Replace with your EEG data generation logic

# Create a DataFrame from the EEG data
eeg_df = pd.DataFrame(eeg_data)

# Define a filename for the CSV file
csv_filename = 'synthetic_eeg_data2.csv'

# Save the EEG data to a CSV file
eeg_df.to_csv(csv_filename, index=False)

print(f"EEG data has been saved to '{csv_filename}'.")
