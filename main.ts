/**
 * This program calculates how many logs
 * a truck can fit
 *
 * By: Mohamad Tanbari
 * Version: 1.0
 * Since: 2024-9-18
 */

import { createPrompt } from 'bun-promptx'

// Variables
const truckCapacity = 1100
const logWeight = 20

console.log('Choose the length of the logs that you would like to move with a truck')

// Input
const logLengthInput = createPrompt('Enter the length of logs in meters between-> 0.25, 0.5, 1: ')

// Convert input to int
const logLength = parseFloat(logLengthInput.value)

// Calculate
const totalLogs = truckCapacity / (logLength * logWeight)

// Output
console.log(`The truck can carry ${totalLogs} logs that are ${logLength} meters long.`)

// Done
console.log('\nDone.')
