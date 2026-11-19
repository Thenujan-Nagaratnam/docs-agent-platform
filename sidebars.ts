import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// The Agent Manager Cloud sidebar. Every page in docs/ must be listed here.
// Agent Control Plane and AI Gateway each keep their pages in their own folder
// (docs/agent-control-plane/, docs/ai-gateway/).
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
      "type": "doc",
      "id": "quick-start",
      "label": "Quick Start Guide",
      "className": "sidebar-section-icon-quick-start"
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
      "items": [
        {
          "type": "doc",
          "id": "agent-control-plane/overview",
          "label": "Overview"
        },
        {
          "type": "category",
          "label": "Create",
          "collapsed": true,
          "items": [
            {
              "type": "category",
              "label": "Agents",
              "collapsed": true,
              "items": [
                {
                  "type": "doc",
                  "id": "agent-control-plane/create/add-an-agent",
                  "label": "Add an Agent"
                },
                {
                  "type": "doc",
                  "id": "agent-control-plane/create/create-from-source-code",
                  "label": "Create an Agent from Source Code"
                },
                {
                  "type": "doc",
                  "id": "agent-control-plane/create/create-from-a-sample",
                  "label": "Create an Agent from a Sample"
                },
                {
                  "type": "doc",
                  "id": "agent-control-plane/create/create-from-the-agent-catalog",
                  "label": "Create an Agent from the Agent Catalog"
                }
              ]
            },
            {
              "type": "doc",
              "id": "agent-control-plane/create/mcp-servers",
              "label": "MCP Servers"
            }
          ]
        },
        {
          "type": "category",
          "label": "Develop",
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "agent-control-plane/develop/llm-and-tool-configurations",
              "label": "LLM and Tool Configurations"
            },
            {
              "type": "doc",
              "id": "agent-control-plane/develop/build-an-agent",
              "label": "Build an Agent"
            },
            {
              "type": "doc",
              "id": "agent-control-plane/develop/configure-the-build",
              "label": "Configure the Build"
            },
            {
              "type": "doc",
              "id": "agent-control-plane/develop/edit-agent-details",
              "label": "Edit Agent Details"
            },
            {
              "type": "category",
              "label": "Security",
              "collapsed": true,
              "items": [
                {
                  "type": "doc",
                  "id": "agent-control-plane/develop/security/agent-id",
                  "label": "Agent ID"
                },
                {
                  "type": "doc",
                  "id": "agent-control-plane/develop/security/api-keys",
                  "label": "API Keys"
                }
              ]
            }
          ]
        },
        {
          "type": "doc",
          "id": "agent-control-plane/deploy/deploy-an-agent",
          "label": "Deploy"
        },
        {
          "type": "doc",
          "id": "agent-control-plane/test/try-your-agent",
          "label": "Test"
        },
        {
          "type": "doc",
          "id": "agent-control-plane/publish/publish-to-the-agent-catalog",
          "label": "Publish"
        },
        {
          "type": "category",
          "label": "Observability",
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "agent-control-plane/observability/traces",
              "label": "Traces"
            },
            {
              "type": "doc",
              "id": "agent-control-plane/observability/runtime-logs",
              "label": "Runtime Logs"
            },
            {
              "type": "doc",
              "id": "agent-control-plane/observability/system-metrics",
              "label": "System Metrics"
            }
          ]
        },
        {
          "type": "category",
          "label": "Evaluation",
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "agent-control-plane/evaluation/evaluators",
              "label": "Evaluators"
            },
            {
              "type": "doc",
              "id": "agent-control-plane/evaluation/monitors",
              "label": "Monitors"
            }
          ]
        },
        {
          "type": "category",
          "label": "Administer",
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "agent-control-plane/administer/projects",
              "label": "Projects"
            },
            {
              "type": "doc",
              "id": "agent-control-plane/administer/gateways",
              "label": "Gateways"
            },
            {
              "type": "doc",
              "id": "agent-control-plane/administer/identity-providers",
              "label": "Identity Providers"
            },
            {
              "type": "doc",
              "id": "agent-control-plane/administer/llm-service-providers",
              "label": "LLM Service Providers"
            },
            {
              "type": "doc",
              "id": "agent-control-plane/administer/agent-identity-groups-and-roles",
              "label": "Agent Identity Groups and Roles"
            }
          ]
        }
      ]
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
