/**
 * AgenticOrg Client SDK for Pine Labs Hackathon
 * Target: https://agenticorg.hackathon.pinelabs.com
 */

class AgenticOrgClient {
  constructor(config = {}) {
    this.apiKey = config.apiKey || process.env.AGENTICORG_API_KEY || process.env.AGENTIC_ORG_API_KEY || '';
    this.baseUrl = (config.baseUrl || process.env.AGENTICORG_BASE_URL || 'https://agenticorg.hackathon.pinelabs.com').replace(/\/+$/, '');
    this.timeout = config.timeout || 120000; // 120s timeout as recommended
  }

  agents = {
    /**
     * Run an agent session on the hackathon AgenticOrg instance
     * POST /api/v1/agents/{AGENT_ID}/run
     * Payload: { "action": "process", "inputs": { "task": "..." }, "context": {...} }
     */
    run: async ({ agentId, task, inputs = {}, context = {} }) => {
      if (!this.apiKey) {
        throw new Error('Missing AgenticOrg API Key. Provide your AGENTICORG_API_KEY.');
      }

      if (!agentId) {
        throw new Error('Missing Agent UUID. Please provide the UUID of your agent created in AgenticOrg.');
      }

      // Ensure endpoint matches /api/v1/agents/{UUID}/run
      const endpoint = `${this.baseUrl}/api/v1/agents/${encodeURIComponent(agentId)}/run`;
      
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), this.timeout);

      const requestBody = {
        action: 'process',
        inputs: {
          task: task || inputs.task || 'Calculate optimal credit card rewards',
          ...inputs
        },
        context: context || {}
      };

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(requestBody),
          signal: controller.signal
        });

        clearTimeout(timer);

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`AgenticOrg error HTTP ${response.status}: ${errText || response.statusText}`);
        }

        const data = await response.json();
        
        return {
          success: data.status === 'completed' || Boolean(data.output),
          status: data.status,
          confidence: data.confidence,
          output: data.output || (typeof data === 'string' ? data : JSON.stringify(data)),
          raw: data
        };
      } catch (err) {
        clearTimeout(timer);
        if (err.name === 'AbortError') {
          throw new Error('AgenticOrg request timed out after 120 seconds.');
        }
        throw err;
      }
    }
  };
}

module.exports = {
  AgenticOrgClient
};
