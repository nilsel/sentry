from django.utils.decorators import method_decorator

from sentry.api.base import Endpoint
from sentry.api.serializers import serialize
from sentry.web.decorators import has_access
from sentry.web.frontend.groups import _get_group_list

from rest_framework.response import Response


class GroupIndexEndpoint(Endpoint):
    @method_decorator(has_access)
    def get(self, request, team, project):
        offset = 0
        limit = 100

        response = _get_group_list(
            request=request,
            project=project,
        )

        group_list = response['event_list']
        group_list = list(group_list[offset:limit])

        results = serialize(group_list, request)

        return Response(results)
