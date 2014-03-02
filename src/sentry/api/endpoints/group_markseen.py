from django.utils import timezone
from django.utils.decorators import method_decorator

from sentry.api.base import Endpoint
from sentry.models import Group, GroupSeen
from sentry.web.decorators import has_access

from rest_framework.response import Response


class GroupMarkSeenEndpoint(Endpoint):
    @method_decorator(has_access)
    def post(self, request, team, project, group_id):
        group = Group.objects.get(
            id=group_id,
            project=project,
        )
        now = timezone.now()

        GroupSeen.objects.create(
            project=project,
            group=group,
            user=request.user,
            last_seen=now,
        )

        return Response()
