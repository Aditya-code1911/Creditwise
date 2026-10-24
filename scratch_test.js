const fs = require('fs');
const env = fs.readFileSync('.env', 'utf8');
env.split('\n').forEach(l => {
  const parts = l.split('=');
  if (parts.length >= 2 && !l.trim().startsWith('#')) {
    process.env[parts[0].trim()] = parts.slice(1).join('=').trim();
  }
});

const { AgenticOrgClient } = require('./lib/agentic_sdk');
const client = new AgenticOrgClient();

async function runTest() {
  const query = "Buying an iPhone for 80000 on Amazon with ICICI instant discount. Which card should I use?";
  const merchant = "Amazon";
  const amount = "80000";
  const userCards = ["Amazon Pay ICICI", "HDFC Millennia", "SBI Cashback"];
  const cardsList = userCards.join(', ');
  const enrichedTask = `${query}\n\n[User Context]: Saved Cards: [${cardsList}]. Merchant: ${merchant || 'General'}. Amount: ₹${amount || 'N/A'}.`;

  console.log('Sending request to Pine Labs AgenticOrg...');
  try {
    const sdkResult = await client.agents.run({
      agentId: process.env.AGENTICORG_AGENT_ID,
      task: enrichedTask,
      inputs: {
        task: enrichedTask,
        merchant: merchant || '',
        amount: amount || '',
        cards: cardsList
      },
      context: {
        merchant: merchant || '',
        amount_inr: amount || '',
        category: '',
        user_cards: userCards || []
      }
    });

    console.log('Result status:', sdkResult.status);
    console.log('Confidence:', sdkResult.confidence);
    console.log('Output:', JSON.stringify(sdkResult.output, null, 2));
    console.log('Raw:', JSON.stringify(sdkResult.raw, null, 2));
  } catch (err) {
    console.error('SDK Exception:', err.message);
  }
}

runTest();
