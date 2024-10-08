import * as k8s from '@kubernetes/client-node';

const kc = new k8s.KubeConfig();
const cluster  = {
    caData: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURCVENDQWUyZ0F3SUJBZ0lJVTFNQ0NKYStRejR3RFFZSktvWklodmNOQVFFTEJRQXdGVEVUTUJFR0ExVUUKQXhNS2EzVmlaWEp1WlhSbGN6QWVGdzB5TkRBMk1qa3lNakkwTVRCYUZ3MHpOREEyTWpjeU1qSTVNVEJhTUJVeApFekFSQmdOVkJBTVRDbXQxWW1WeWJtVjBaWE13Z2dFaU1BMEdDU3FHU0liM0RRRUJBUVVBQTRJQkR3QXdnZ0VLCkFvSUJBUUM1cWRZbjBzWmZyZTJZZmMwUzd4c1hrc3k1RG5ZSzJjNWJ6dy9PdnFyREQwMjdocUhXc3B1SmxkQzYKeTZBc1pHNnREeTl0ZGVPeXZXRTlLR1dkNlJMN21vMXRkbllyWVpRTjRaMzNIcEdHcStMQXNieFZpWlRvdVJTRQp1YTJNUTl1TlJ4djlHaTB5Z3RscnYrZjhtOGQxYUt3eFpRMXZvUWhsekRWV0FhY1ZaMU5hYUwzb3ExWWJ0WVhiCnJ6aTFQTjdxTE1NcEV2UmZ4NTJIQXlFOXpGR2xXN1hsSDNBZzlrUGw4dmZVUlVJNkJubnppaHJwczZNbm1XZnQKVFRtcTIrSHV5SlRXV2ZMRHdXRldGUXJXL3BQTklaSm9uUk16NkdzbUdidzVxRVVWZERvbnZlNlRYV1FpaDNyego5ZENFYTV2L1RkWFFKRktON3VHS0ZOQlh4L1ozQWdNQkFBR2pXVEJYTUE0R0ExVWREd0VCL3dRRUF3SUNwREFQCkJnTlZIUk1CQWY4RUJUQURBUUgvTUIwR0ExVWREZ1FXQkJRdjJrR0pjSFFVeTJXM0ZSejZLM0FMMndyRk1UQVYKQmdOVkhSRUVEakFNZ2dwcmRXSmxjbTVsZEdWek1BMEdDU3FHU0liM0RRRUJDd1VBQTRJQkFRQjlBZFYvcGhQdQptSVVwK0xFdlpYVE91b0NHS0Rrc1lOU3FNRWVoNzhzVFc1YU4xWWYvRGk4dVpFL1YzOVdJc0h4eVBWWGl1RVlUCkNLR1lLMTNwRVBURWxYVGZjWElHSUw2ekxDS3Vva0VoQnRWTXkxMWFJZ3RaVHo1cWx3VnFpSStNcElqSnlHangKZXVKUUgzZTJ4bUo3YzIwWUZ1TVZNakNnVHpYVHdOd1J4cHIxNlVpN1UwTWRMMkh3NUN3OU15S0pSNXlvOEF2TgpzdkdiS1paT3htYTNaUktHTVBqT1hnc1J6amNLTFlQWHRMUFFUdWw2THNXN1J4U1B0VHVXZzZ0K29PWW93RGIxCnhqMTBJa1RXc0gvb2xyZmQvN1lzZTlzSkFhbDBrYjBFZGZMRmdXQnB1TjFjbjhUc0NYM0VwMUZoTWY2amZYOVcKSktxc0NiUitzNHRCCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K',
    caFile: undefined,
    name: 'docker-desktop',
    server: 'https://kubernetes.docker.internal:6443',
    skipTLSVerify: false,
    tlsServerName: undefined
}
const user = {
    authProvider: undefined,
    certData: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURRakNDQWlxZ0F3SUJBZ0lJVW9xSjdKQzB4NjR3RFFZSktvWklodmNOQVFFTEJRQXdGVEVUTUJFR0ExVUUKQXhNS2EzVmlaWEp1WlhSbGN6QWVGdzB5TkRBMk1qa3lNakkwTVRCYUZ3MHlOVEEyTWpreU1qSTVNVEJhTURZeApGekFWQmdOVkJBb1REbk41YzNSbGJUcHRZWE4wWlhKek1Sc3dHUVlEVlFRREV4SmtiMk5yWlhJdFptOXlMV1JsCmMydDBiM0F3Z2dFaU1BMEdDU3FHU0liM0RRRUJBUVVBQTRJQkR3QXdnZ0VLQW9JQkFRQ3VnOXc3OC9rRzhXb1cKNHRNUE5xYW5jT3VCT3dxNlNDcTJFaEFkZWh0ODBRSHdzZ1hBQjRsYnhrMHVOcWNUR3I5U2JaT2N0RENLc3FGeQpvNHdrakROSU5OZmU1cUdQM3E3VzNaNWNOR3o5b1hnSk9XdUFack9HV1ExaUtnVGdQNUNla0NPNWVWY0Q4YlNSCndEdy9WbGx0UXlWaWZ2a2NHRnZ6OElXS29mbHVpYmp5dXhOak5VMzBneTV6YzNwMjIxaFZsbTM3UTVEbTlTTHIKNEo1RGFJRm5EN2dXdkEzWDM4WEpXVTVua2lmamI5VlVmZjIwMThJd1hQcTg1OWkxUzB5bzZacVowVTlCODVzbQp0MVR5eHEva1pVRzZlM1JlLy9QaVJhV0w0dkRwb2RLTHpyaXpHSmpJbFMyZzk2aXgxVGRtcmswRy9kVDJCQSsvCm5aUGRiRjV6QWdNQkFBR2pkVEJ6TUE0R0ExVWREd0VCL3dRRUF3SUZvREFUQmdOVkhTVUVEREFLQmdnckJnRUYKQlFjREFqQU1CZ05WSFJNQkFmOEVBakFBTUI4R0ExVWRJd1FZTUJhQUZDL2FRWWx3ZEJUTFpiY1ZIUG9yY0F2YgpDc1V4TUIwR0ExVWRFUVFXTUJTQ0VtUnZZMnRsY2kxbWIzSXRaR1Z6YTNSdmNEQU5CZ2txaGtpRzl3MEJBUXNGCkFBT0NBUUVBZmlaS0xNeGtwcnlYa1RhTFVHWXl1WmVhbHZkVWowQTYrV2F6UlJESHhwbVhIcGo5UFp6eVdpSWoKN1pyc3VyVFA1UXRCMU56NUlJSjRvc2lESU9XVEpxVG0rMEREQXRqQlEzZnNVSGZpNzFiKy9DQTkxb01iL0RGegoxNW10R1BheDZlVlZZV0ZVcXBIY1NYZ0ZrdXZEYWw1VlR1SVptSjdPOVQrRW5iRFhHOGJ0MEhURFF3bm13b2hNCklKL2RraTQrUDdrMXd6YU9uQk1qRnFkNTlrci9VWU5Nbi90VnROUDI4K3IyVDNpZXcvaXhKeE9Ra2hnZVQrTTUKMFpDUmU2KzdVaVp3cXh6SXZLTXFCdm1GNFYydTdUWEYreVZwQjFNeDd1NGRSREpGamxDZVhMRkwwVk1iSm1hbworK0MrcnVhcmxyRnR1ODZIODNYd1Q5Q0tFS010c0E9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==',
    certFile: undefined,
    exec: undefined,
    keyData: 'LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb3dJQkFBS0NBUUVBcm9QY08vUDVCdkZxRnVMVER6YW1wM0RyZ1RzS3VrZ3F0aElRSFhvYmZORUI4TElGCndBZUpXOFpOTGphbkV4cS9VbTJUbkxRd2lyS2hjcU9NSkl3elNEVFgzdWFoajk2dTF0MmVYRFJzL2FGNENUbHIKZ0dhemhsa05ZaW9FNEQrUW5wQWp1WGxYQS9HMGtjQThQMVpaYlVNbFluNzVIQmhiOC9DRmlxSDVib200OHJzVApZelZOOUlNdWMzTjZkdHRZVlpadCswT1E1dlVpNitDZVEyaUJadys0RnJ3TjE5L0Z5VmxPWjVJbjQyL1ZWSDM5CnROZkNNRno2dk9mWXRVdE1xT21hbWRGUFFmT2JKcmRVOHNhdjVHVkJ1bnQwWHYvejRrV2xpK0x3NmFIU2k4NjQKc3hpWXlKVXRvUGVvc2RVM1pxNU5CdjNVOWdRUHY1MlQzV3hlY3dJREFRQUJBb0lCQUh5NlVaV244Ync4bnc1cwpYMXpvT29SQitKQU1tc1k0L2czVEt5Rm1QRzhoRXJudEFwOFV3OStNQTIyY01oMDlhTENKRUk5WFdicEhvWXhGCng4djNTRSs3Tk81aTkrWFR5akpYZ3U5enFOSTlyWVVxUE9Nd2crN3BodDg2R1BJTmZGZFh2YkM2UUs3WSthMlMKTDMwMVFnVU5rSkt0SFc0dkdzbG1ob3RtNk5kTytCWTNTTkMvVmRnclNNdjI1QjJKZmt2akNPRzg0NEJFS0RDbQpxa0d5dUFnYW9MYy8zc0Q1dGwzN3ZnL0pVZzg1NFk4TGVKRTNaVDUyaVMrT2kzQUpuVUJLL2Q2ekF1cm8yRGN4CnNYR0g4cEdxTnY5MFRsSzQ3c3R3SjBVUTN2WHRoK1FVN2hUclhybWdjeE44N3pMR1dCeXpaYUpBbytFUHl0c0gKY293cGFJRUNnWUVBNklERHRiampLOGlwdlFablFoQlhRUHNOUnR5dzJpV1pSdzJBRGptdHZJNTNKa0Y4T2MwZgpEZFpBdkdyUS9ZYzJUTHUwbWhWdGtsNktRUE5aK0VoTEZBZHp6UEJ0Q095YUY2S0JZNUdnOFIwbTdjaDNhVGJzCksySGhBZnNVR1hxUjBzN2JqQ3BoRW9SamdwZmlwakJOM2tJbGxBcEtlMFRBZFNnQUJyRFpFK3NDZ1lFQXdDYmEKWWZNMDd4cnNHNDYzWllyYzliTjJNYzQ0eWtWK0Yzc2hyREdmSzRsbUJXSXFsdlMydGFKSXBOQVNuS1ptMDU3Mwp5QjN6Ukk1aGtsdjhMSmw3ekZGUVl1RlBHcFBsckhEMlJ6d0V6SllIVWdNdVZnOVZmYlgxdmViOFlSVFdOV3ZuCmZPNWRuQU5takRCanAwSExKYlVibnNRV25NeGxiSitsMzBSTHBaa0NnWUFkNkNKRWg4bkE0Z2pqWmFWMm0vOTkKUGszUTVhWmlDU0FVUWFwTktpSXM5TzVpbjEzSldaYzdBbXBGVWtBYnZIN0JsQXVCSG14L3ZXVnZRVjQ3VDZGSQpyRVM3QWRva29icVllN0RGREFCMXcxZzBrZXE2UC9SVkNEd1hNeUs4dkVWeHBtWWJPNEJORDNaMVgvQXBqR0VYCnk4NWxvb1UrSWZQWG5oT1N5TUREalFLQmdDU3VoaHdTMExVZ241ZzNLMzJmLzhTTDZQRmpHK1pKVStQcHBxajMKcEJvc2xhUkxkRFB6TFhvSksvTUNvYnJ6N1VkUzNweCtVelZ3Tk9JNjJ5NHNjcnl6ZlRRVExRVzIzQzZLTmdtdApSSUZGMXNucVA0dEFUQ0srZk5ZdTVWa25JQ2w4bXVsM203a3YwUURNTUFuNi9td0pZZWR5S1pydlRpRnBiTUh0CmlMOXBBb0dCQUlVL0dzS0ozcW10TmFRUnVpWnQ3QVgxT09aTlpxWmFlOVhtY2N6QjBTd0EvUWYxNmNtZllnTCsKSjkyS3BoQ3pheWprbGtMTTZDb0IvUWdWZjRFcnJkTEo2QnhOWE1MZ0tsK2tZRzZTWm51RDNpWUlEcUJ6OEVGeApsL1gyeTU2VXYydlZ6RlBEbGxOb25MY2RVV1l1WGhsRnBXOGFGVnZpMWZud3FCUEc5eTRFCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tCg==',
    keyFile: undefined,
    name: 'docker-desktop',
    token: undefined,
    password: undefined,
    username: undefined
}

kc.loadFromOptions({
    clusters: [cluster],
    users: [user],
    contexts: [{
        name: 'docker-desktop',
        cluster: 'docker-desktop',
        user: 'docker-desktop',
    }],
    currentContext: 'docker-desktop',
});

export const k8sAppsApi = kc.makeApiClient(k8s.AppsV1Api);
export const k8sCoreApi = kc.makeApiClient(k8s.CoreV1Api);
export const networkingApi = kc.makeApiClient(k8s.NetworkingV1Api);
export const metricsClient = new k8s.Metrics(kc);
export const exec = new k8s.Exec(kc);
