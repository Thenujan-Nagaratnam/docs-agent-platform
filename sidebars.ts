import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// The Agent Manager Cloud sidebar. Every page in docs/ must be listed here.
// Agent Control Plane, AI Gateway, and API Portal and AI Hub each keep their
// pages in their own folder (docs/agent-control-plane/, docs/ai-gateway/, docs/api-portal/).
const sidebars: SidebarsConfig = {
  "docsSidebar": [
    {
      "type": "category",
      "label": "Get Started",
      "collapsed": true,
      "items": [
        "get-started/what-is-amp"
      ],
      "className": "sidebar-section-icon-get-started"
    },
    {
      "type": "category",
      "label": "Concepts",
      "collapsed": true,
      "items": [
        "concepts/organization",
        "concepts/environment",
        "concepts/project",
        "concepts/agent-lifecycle",
        "concepts/internal-and-external-agent",
        "concepts/agent-kind-and-catalog",
        "concepts/observability",
        "concepts/evaluation",
        "concepts/agentid",
        "concepts/gateway",
        "concepts/deployment-pipeline",
        "concepts/llm-service-provider",
        "concepts/mcp-proxy"
      ],
      "className": "sidebar-section-icon-concepts"
    },
    {
      "type": "category",
      "label": "Agent Control Plane",
      "className": "sidebar-section-icon-control-plane",
      "collapsed": true,
      "link": {
        "type": "doc",
        "id": "agent-control-plane/overview"
      },
      "items": []
    },
    {
      "type": "category",
      "label": "AI Gateway",
      "className": "sidebar-section-icon-ai-gateway",
      "collapsed": true,
      "link": {
        "type": "doc",
        "id": "ai-gateway/overview"
      },
      "items": []
    },
    {
      "type": "category",
      "label": "API Portal and AI Hub",
      "className": "sidebar-section-icon-portal",
      "collapsed": true,
      "link": {
        "type": "doc",
        "id": "api-portal/overview"
      },
      "items": []
    },
    {
      "type": "category",
      "label": "Guides",
      "collapsed": true,
      "items": [
        "guides/deploy-an-a2a-agent",
        {
          "type": "category",
          "label": "Evaluation & Observability",
          "collapsed": true,
          "items": [
            "guides/custom-evaluators",
            "guides/evaluation-monitors",
            "guides/configure-trace-sampling"
          ]
        },
        {
          "type": "category",
          "label": "Securing Agent Endpoints",
          "collapsed": true,
          "items": [
            "guides/secure-agent-endpoints-with-api-keys",
            "guides/secure-agents-with-jwt-authentication",
            "guides/configure-cors-for-agent-endpoints"
          ]
        },
        {
          "type": "category",
          "label": "Platform Administration",
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "guides/register-llm-service-provider",
              "label": "LLM Service Providers"
            },
            "guides/configure-agent-llm-configuration",
            {
              "type": "doc",
              "id": "guides/register-mcp-proxy",
              "label": "MCP Proxies"
            },
            "guides/environment-management",
            "guides/amp-instrumentation"
          ]
        },
        {
          "type": "category",
          "label": "Agent Identity and Access Management",
          "collapsed": true,
          "items": [
            "guides/authorize-agent-access-to-mcp-tools",
            "guides/configure-agent-mcp-proxies",
            "guides/use-agentid-in-platform-hosted-agents",
            "guides/retrieve-agentid-for-externally-hosted-agents"
          ]
        }
      ],
      "className": "sidebar-section-icon-guides"
    },
    {
      "type": "category",
      "label": "Tutorials",
      "collapsed": true,
      "items": [
        "tutorials/create-your-first-agent",
        "tutorials/govern-the-model",
        "tutorials/give-the-agent-real-tools",
        "tutorials/observe-first-agent",
        "tutorials/promote-your-agent",
        {
          "type": "doc",
          "id": "tutorials/build-a-ballerina-agent",
          "label": "Deploy the Ballerina Leave Assistant Sample"
        },
        "tutorials/deploy-the-a2a-notes-agent-sample"
      ],
      "className": "sidebar-section-icon-tutorials"
    }
  ]
};

export default sidebars;
